import type { DoneCallback, Job } from 'bull';
import Logger from 'bunyan';

import { config } from '@root/config';
import { valueService } from '@service/db/value.service';

const log: Logger = config.createLogger('Value Worker');

class ValueWorker {
  async updateValue(job: Job, done: DoneCallback): Promise<void> {
    try {
      const { key } = job.data;
      // Call the service to update the value
      await valueService.updateValueById(key, job.data);
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
