const chalk  = require('chalk')
const figlet  = require('figlet')


console.log(chalk.yellow(figlet.textSync('Suyan', {
    horizontalLayout: 'full'
})));


const program = new Command();
// 版本
program
    .version(packageJson.version)
    .usage('<commnad [options]>');
 
 
// 可选参数
program
    .option('-d, --debug', 'crate a app project');
 
 
// create 命令
program
    .command('create <app-name>')
    .description('crate a new project')
    .option('-f, --force', 'Overwrite target directory if it exists')
    .action(appname => {
        // 输入的 appname
    })
 
 
// 触发 --help 后打印一些信息
program.on('--help', () => {
    console.log();
    console.log(`  create by ${chalk.cyan('公众号素燕')} 关注获取更多有趣的前端知识`);
    console.log(`  more click ${chalk.red('https://github.com/lefex/FE')}`)
    console.log();
});
 
 
program.commands.forEach(c => c.on('--help', () => console.log()));
 
 
// 开始解析参数
program.parse(process.argv);
 
 
// 无任何命令时输出帮助信息
if (!process.argv.slice(2).length) {
    program.outputHelp();
}

