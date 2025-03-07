import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "failed", message: "Error in connection to DB" });
    }

    if (req.method === "POST") {
        const data = req.body.data;

        if (!data.name || !data.lastName || !data.email)
            return res.status(400).json({ status: "failed", message: "Invalid Data" });

        try {
            const customer = await Customer.create(data);
            res.status(201).json({ status: "success", message: "Data created", data: customer });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ status: "failed", message: "Error in storing data" });
        }
    } else {
        return res.status(200).json({message: "Successfully connected!"})
    }
}
