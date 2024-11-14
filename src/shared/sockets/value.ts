import { Server } from 'socket.io';

let socketIOValueObject: Server;

export class SocketIOValueHandler {
  public listen(io: Server): void {
    socketIOValueObject = io;
  }
}

export { socketIOValueObject };
