#!/bin/bash
set -e

wget -q https://github.com/github/hub/releases/download/v2.10.0/hub-linux-amd64-2.10.0.tgz
tar zxf hub-linux-amd64-2.10.0.tgz
./hub-linux-amd64-2.10.0/install

BUILD_REPO=$(basename "$(git rev-parse --show-toplevel)")

git clone -b staging --depth 1 https://${GITHUB_USER}:${GITHUB_TOKEN}@${GHE_HOST}/${OWNER}/${DEPLOY_REPO}.git
cd "${DEPLOY_REPO}" || return

git config --local --add hub.host "${GHE_HOST}"
git config --local user.name "${GITHUB_USER}"
git config --local user.email "${GITHUB_EMAIL}"

sed -i -r "s/\"imageTag\":\\s\"[a-z0-9\\-]*?\"/\"imageTag\": \"${GIT_COMMIT}\"/" cdk.context.json
git add cdk.context.json
git commit -m "Release ${GIT_COMMIT}"

git push --set-upstream origin staging
echo -e "Release ${BUILD_REPO}:${GIT_COMMIT} \\n\\nSee https://github.com/hatena/ipdrawer/commit/${GIT_COMMIT}" | hub pull-request -F -