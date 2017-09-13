declare interface BackupData {
  key?: string;
  type?: BackupType;
  nodeName?: string;
  hostAddr?: string;
  startedAt?: Date;
  endedAt?: Date;
  status?: BackupStatus;
}

declare type BackupType = 'FULL' | 'INCREMENTAL';

declare type BackupStatus = 'SUCCESS' | 'FAILED';

declare type BackupStoreState = BackupData[];
