import ExpressApp from './ExpressApp'

const { app } = new ExpressApp()
const PORT : number = process.env.PORT ? Number(process.env.PORT) : 80

app.listen(PORT, () => {
    console.log(`PORT ${PORT} CONNECTED SUCCESS!`)
})