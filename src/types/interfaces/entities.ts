import { Status } from '@interface/dataType';

export interface ServerReply {
  statusCode: number;
  status: Status;
  message?: string;
  data?: Record<string, any>;
}
