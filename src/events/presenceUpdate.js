const { status, statusrole } = require('../../config.json');

module.exports = async(client, oldPresence, newPresence) => {

    // bot check because bots have different ids and owner ids
  if(newPresence.guild.ownerId != newPresence.userId) return; 

  if(!newPresence?.activities[0]?.state) return;
  if(oldPresence === newPresence) return;

  const role = await newPresence.guild.roles.cache.find(role => role.id === statusrole);

    console.log(role)
  if(status.includes(newPresence.activities[0]?.state)) {
    // function to be run when user includes keywords
    if(newPresence.member.roles.cache.has(statusrole)) return;

    newPresence.member.roles.add(role).catch( err => { console.log(err); });
  } 

  if(!status.includes(newPresence.activities[0]?.state)) {
    // function to be run when user does not include keywords

    if(!newPresence.member.roles.cache.has(statusrole)) return;

    newPresence.member.roles.remove(role).catch( err => { return; });
  }
  };
