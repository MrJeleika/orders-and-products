import type { NextApiRequest, NextApiResponse } from 'next'
import { useState } from 'react';
import { Server } from 'socket.io'

type ExtendedNextApiResponse = NextApiResponse & {
  socket?: any;
};

const SocketHandler = (req: NextApiRequest,
  res: ExtendedNextApiResponse) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {
      socket.on('connect', num => {
        socket.broadcast.emit('update-count', num)
      }),
      socket.on('disconnect', num => {
        socket.broadcast.emit('update-count', num)
      })
    })
  }
  res.end()
}

export default SocketHandler