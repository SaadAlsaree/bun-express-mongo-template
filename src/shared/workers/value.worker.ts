import type { DoneCallback, Job } from 'bull';
import Logger from 'bunyan';

import { config } from '@root/config';

const log: Logger = config.createLogger('Value Worker');

class ValueWorker {
  async updateValue(job: Job, done: DoneCallback): Promise<void> {
    try {
      const { key } = job.data;
      // Call the service to update the value
      job.progress(100);
      done(null, job.data);
    } catch (error) {
      log.error(error);
      done(error as Error);
    }
  }

  async deleteValue(job: Job, done: DoneCallback): Promise<void> {
    try {
      const { key } = job.data;
      // Call the service to delete the value
      job.progress(100);
      done(null, job.data);
    } catch (error) {
      log.error(error);
      done(error as Error);
    }
  }
}

export const valueWorker: ValueWorker = new ValueWorker();
