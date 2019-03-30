var renew = {
    run: function() {
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.ticksToLive < 300) {
                console.log('111');
                
                Game.spawns['Spawn1'].renewCreep(creep);
            }
        }
        

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        // console.log('Harvesters: ' + harvesters.length);
        if(harvesters.length < 3) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'harvester'}});        
        }
    
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        // console.log('upgraders: ' + upgraders.length);
        if (upgraders.length < 1) {
            var newUpgraderName = 'Upgrader' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newUpgraderName, 
                {memory: {role: 'upgrader'}}); 
        }

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        // console.log('builders: ' + builders.length);
        if (builders.length < 1) {
            var newBuilderName = 'Builder' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newBuilderName, 
                {memory: {role: 'builder'}}); 
        }
    }
}

module.exports = renew;