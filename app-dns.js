
const dns = require('dns');
let a = dns.getServers()
// a = dns.getServers()
const options = {
    family: 0,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
dns.lookup('taobao.com', options, (err, address, family) =>
    console.log('地址: %j 地址族: IPv%s', address, family));
// 地址: "2606:2800:220:1:248:1893:25c8:1946" 地址族: IPv6

// 当 options.all 为 true 时，则结果将会是一个数组。
options.all = true;
dns.lookup('taobao.com', options, (err, addresses) =>
    console.log('地址: %j', addresses));
console.log(a);
dns.lookupService('127.0.0.1', 80, (err, hostname, service) => {
    console.log(hostname, service);
    // 打印: localhost ssh
});
// NS 名称服务器记录
dns.resolve('taobao.com', 'NS', (err, records) => {
    console.log(records);
    // 打印: localhost ssh
});
dns.resolve4('taobao.com',options,(err, records) => {
    console.log(records);
    // 打印: localhost ssh
});
dns.resolve6('zhihu.com/', options,(err, records) => {
    console.log(records);
    // 打印: localhost ssh
});