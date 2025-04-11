// eslint-disable-next-line no-unused-vars
import { FastifyRequest, FastifyReply } from 'fastify';

const pingHandler = async (_: FastifyRequest, res: FastifyReply): Promise<void> => {
    res.send({ message: 'pong' });
};

export default pingHandler;
