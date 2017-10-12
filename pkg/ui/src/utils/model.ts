import * as protos from '../proto/protos';

export function convertTagsStr(tags: protos.model.ITag[]): string {
    return tags.map((tag) => `${tag.key}=${tag.value}`).join(",")
}

export function parseTags(str: string): protos.model.Tag[] {
    if (str === "") {
        return [];
    }
    return str.split(",").map((tag) => {
        const splitted = tag.split("=");
        return new protos.model.Tag({
        key: splitted[0],
        value: splitted[1],
        })
    })
}
