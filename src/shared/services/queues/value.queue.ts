
import { BaseQueue } from '@service/queues/base.queue';
import type { IValueJob } from '@value/interfaces/value.interface';
import { valueWorker } from '@workers/value.worker';

class ValueQueue extends BaseQueue {
  /**
   *
   */
  constructor() {
    super('Values');
    this.processJob('updateValue', 5, valueWorker.updateValue);
    this.processJob('deleteValue', 5, valueWorker.deleteValue);
  }

  public addValueJob(name: string, data: IValueJob): void {
    this.addJob(name, data);
  }
}

export const valueQueue: ValueQueue = new ValueQueue();
