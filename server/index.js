import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());


const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const PORT = process.env.PORT || 5000;

app.get("/ping", (req, res) => res.send("pong")); // test uchun

app.post("/send", async (req, res) => {
  try {
    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({
        message: "ENV yo‘q: BOT_TOKEN yoki CHAT_ID topilmadi",
      });
    }

    const { service, company, name, phone, projectType, message } = req.body || {};

    const text =
`🚀 Yangi ariza!
🛠 Xizmat: ${service || "-"}
🏢 Company: ${company || "-"}
👤 Ism: ${name || "-"}
📞 Telefon: ${phone || "-"}
📌 Type: ${projectType || "-"}
📝 Xabar: ${message || "-"}`;

    const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });

    const tgData = await tgRes.json().catch(() => ({}));

    // ✅ terminalga ham chiqaradi (xato bo‘lsa ko‘rasiz)
    console.log("TG STATUS:", tgRes.status);
    console.log("TG DATA:", tgData);

    if (!tgRes.ok || !tgData.ok) {
      return res.status(500).json({
        message: "Telegram error",
        tg: tgData,
      });
    }

    return res.json({ success: true });
  } catch (err) {
    console.log("SERVER ERROR:", err);
    return res.status(500).json({ message: "Server error", err: String(err) });
  }
});

app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));