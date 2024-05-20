const amqp = require("amqplib")

async function main() {
    const connection = await amqp.connect("amqp://127.0.0.1:80")
    const channel = await connection.createChannel()

    await channel.consume("email", message => {
        console.log(message.fields.routingKey)
        console.log(message.content.toString())
    },
        {
            noAck: true
        })
}

main()