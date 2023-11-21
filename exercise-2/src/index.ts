import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

async function main() {
    const app = express();
    const router = express.Router();

    router.get('/customers/:customerNumber', async (req, res) => {
        const customerNumber = +req.params.customerNumber;

        const customer = await prisma.customers.findFirst({
            where: {
                customerNumber
            }
        });

        if (!customer) {
            return res.status(400).json({
                success: false,
                message: "Invalid customer number"
            });
        }

        const orders = await prisma.orders.findMany({
            where: {
                customerNumber
            }
        });

        return res.status(200).json({
            success: true,
            customer,
            orders
        });
    });

    app.use(router);

    const PORT = 3004;
    app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`);
    });
}

main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    await prisma.$disconnect();
});
