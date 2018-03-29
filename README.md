# Remote Purchase Demo
本实例是针对一个Solidity语言实现的远程担保交易合约的[例子](http://solidity.readthedocs.io/en/v0.4.21/solidity-by-example.html#safe-remote-purchase)做了一个界面演示。
### 1 编写智能合约
这个合约通过交“押金”的方式，由合约做“担保”完成一个远程的买卖流程。该合约主要有一下几个功能：

* 1. 卖方发布一个商品
* 2. 买方下单
* 3. 买方确认收货
* 4. 卖方撤销发布商品（这个只有在买方下单前可以执行）

### 2 编译合约
使用solc或solcjs编译上面的合约，我们同时会生成.abi和.bin文件，这两个在部署和调用合约时需要用到

```shell
➜  remote-purchase solc --version
solc, the solidity compiler commandline interface
Version: 0.4.16+commit.d7661dd9.Darwin.appleclang

➜  remote-purchase solc --abi --bin ./Purchase.sol -o build

# 编译成功后会在build目录下生成.abi和.bin文件
➜  remote-purchase ll build
total 16
-rw-r--r--  1 donnie  staff   1.2K Mar 29 11:05 Purchase.abi
-rw-r--r--  1 donnie  staff   3.4K Mar 29 11:05 Purchase.bin

```

或

```
➜  remote-purchase solcjs --version
0.4.16+commit.d7661dd9.Emscripten.clang

➜  remote-purchase solcjs --abi --bin ./Purchase.sol -o build

# 编译成功后会在build目录下生成.abi和.bin文件
➜  remote-purchase ll build
total 16
-rw-r--r--  1 donnie  staff   1.2K Mar 29 11:08 __Purchase_sol_Purchase.abi
-rw-r--r--  1 donnie  staff   3.4K Mar 29 11:08 __Purchase_sol_Purchase.bin
```

### 3 编写简单js，实现功能调用
在浏览器中直接打开index.html文件， 可以看到预先准备的好的两件模拟商品，主要有以下操作：

* 3.1 publish，卖家发布一个商品，这时会创建一个合约，卖家需要预先缴纳2*商品价格的押金，这笔钱会放在合约地址中
* 3.2 make offer， 买家下单，买家也需要预先缴纳2*商品价格的押金，这笔钱也放入合约地址中
* 3.3 confrim received， 买家确认收货，这时整个订单完成，合约会根据商品的价格计算双方可以拿到多少钱
* 4.4 abort，在买家下单前，卖家可以取消商品的发布，押金会返回给卖家

注： 在操作之前，先需要启动一个模拟的以太坊环境，这里是用testrpc，bin目录中有一个简单的脚本，可以启动testrpc，并初始化一些数据。（前提预先安装testrpc）

### 4 流程分析
这个合约是如何保证双方利益的，简单分析一下流程：

* 1. 首先是卖家发布一个商品，假设发布商品的价值为1，那么卖家需要预先缴纳的押金为2，这个押金暂时保存在合约中，接下来等买家购买，或者卖家自己撤销
* 2. 如果卖家自己撤销，这时押金会直接返回给卖家
* 3. 如果有买家下单，买家同样需要支付商品价值两倍的押金：即2，这时合约中的押金数额为4，买家等待卖家发货
* 4. 卖家发货，买家收到货并确认收货，这时合约会计算双方应该得到多少钱：卖家3，买家1，这样流程就完成了。

这里的关键点在3，这时双方处于“相互牵制”状态，如果卖家不发货，买家就无法确认收货，双方都拿不到钱；如果卖家发过，买家不确认收货，双方也都拿不到钱，所有卖家和买家都想拿到钱的话必须走完流程。

### 5 遗留问题
* 1. 有很多人问到，就是卖家发的货与实际不符或者有问题，双方发生纠纷，这时怎么办？ <br/> 其实这不是合约本身应该关心的问题，应该由其他约束去解决这种纠纷。
* 2. 卖家每次发布一个商品都要创建一个合约？<br/>目前是这种情况，这种情况容易造成资源浪费，其实EVM也有一些机制鼓励大家把不用的合约销毁，销毁之后会得到一些补偿。这个合约里可以增加一个可以自毁的逻辑，让卖家在合适的时机去调用。
