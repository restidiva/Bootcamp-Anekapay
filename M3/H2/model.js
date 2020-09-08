const { program } = require("commander");
const { prompt } = require('inquirer');
const {addUser,findUser,updateUser,deleteUser,listUser} = require('./index')

const form = [
    {
      type: 'input',
      name: 'nama',
      message: 'Nama'
    },
    {
      type: 'input',
      name: 'usia',
      message: 'Usia'
    },
    {
     type:'input',
     name:'status',
     message:'Status'
    }
  ];

program 
  .version('1.0.0')
  .description('CLI MONGODB NODE JS')

// Add 
program
  .command('add')
  .alias('a')
  .description('Add User')
  .action(() => {
    prompt(form).then(jawaban => addUser(jawaban));
  });

// Find 
program
  .command('find <name>')
  .alias('f')
  .description('Find User')
  .action(name => findUser(name));

// Update 
program
  .command('update <_id>')
  .alias('u')
  .description('Update User')
  .action(id => {
    prompt(form).then(jawaban => updateUser(id, jawaban));
  });

// Delete 
program
  .command('delete <_id>')
  .alias('d')
  .description('Delete User')
  .action(id => deleteUser(id));

// Read 
program
  .command('list')
  .alias('l')
  .description('List User')
  .action(() => listUser());

program.parse(process.argv);