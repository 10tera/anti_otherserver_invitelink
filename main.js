const Discord = require('discord.js')
const client = new Discord.Client()
const isInvite=async (guild,code)=>{
    return await new Promise((resolve)=>{
        guild.fetchInvites().then((invites)=>{
            for(const invite of invites){
                if(code===invite[0]){
                    resolve(true)
                    return
                }
            }
            resolve(false)
        })
    })
}

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('message', async msg => {
    const Code=msg.content.split('discord.gg/')[1]
    if(msg.content.includes('discord.gg/')){
        const isourinvite=await isInvite(msg.guild,Code)
        if(!isourinvite){
            msg.delete()
        }
    }
})

client.login('--------')