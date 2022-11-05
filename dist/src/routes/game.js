"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRoutes = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
const authenticate_1 = require("../plugins/authenticate");
async function gameRoutes(fastify) {
    fastify.get('/pools/:id/games', {
        onRequest: [authenticate_1.authenticate]
    }, async (request) => {
        const getPoolParams = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = getPoolParams.parse(request.params);
        const games = await prisma_1.prisma.game.findMany({
            orderBy: {
                date: 'desc',
            },
            include: {
                guesses: {
                    where: {
                        participant: {
                            userId: request.user.sub,
                            poolId: id,
                        }
                    }
                }
            }
        });
        return {
            games: games.map(game => {
                return {
                    ...game,
                    guess: game.guesses.length > 0 ? game.guesses[0] : null,
                    guesses: undefined,
                };
            })
        };
    });
}
exports.gameRoutes = gameRoutes;
