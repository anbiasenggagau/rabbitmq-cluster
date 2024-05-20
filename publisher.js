const amqp = require("amqplib")

async function main() {
    const connection = await amqp.connect("amqp://127.0.0.1:80")
    const channel = await connection.createChannel()

    await channel.assertExchange("notification", "direct")
    await channel.assertQueue("email")
    await channel.bindQueue("email", "notification", "email")
    let i = 0
    setInterval(() => {
        channel.publish("notification", "email", Buffer.from(`Ini Pesan ${i}`))
        i++
        console.log("send " + i)
    }, 100)
}

main()