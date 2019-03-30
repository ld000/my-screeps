var renew = {
    run: function() {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' + harvesters.length);
        if(harvesters.length < 2) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'harvester'}});        
        }
    
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log('upgraders: ' + upgraders.length);
        if (upgraders.length < 1) {
            var newUpgraderName = 'Upgrader' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newUpgraderName, 
                {memory: {role: 'upgrader'}}); 
        }

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        console.log('builders: ' + builders.length);
        if (builders.length < 1) {
            var newBuilderName = 'Builder' + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newBuilderName, 
                {memory: {role: 'builder'}}); 
        }
    }
}

module.exports = renew;