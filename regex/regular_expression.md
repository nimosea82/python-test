# 正则表达式

## Python

正则表达式很多语言都支持，本文档使用Python作为演示。
```python
import re
```

### re函数

+ re.match

```python
re.match(pattern, string, flags=0)
```

+ re.search


```python
re.match(pattern, string, flags=0)
```

+ re.findall

```python
findall(string[, pos[, endpos]])
```

## re.match、re.search和re.findall区别
+ re.match
  
只匹配字符串的开始，不符合则匹配失败，返回none
  
+ re.search

匹配整个字符串，直到找到一个匹配，只匹配一次

+ re.findall

匹配整个字符串，返回一个列表  


## 元字符

元字符是构造正则表达式的一种基本元素

常用的元字符：

|元字符|说明|
|--|--|
|.|匹配除换行符以外的任意字符|
|\w|匹配字母或数字或下划线或汉字|
|\s|匹配任意的空白符|
|\d|匹配数字|
|\b|匹配单词的开始或结束|
|^|匹配字符串的开始|
|$|匹配字符串的结束|

\w能不能匹配汉字，需要看操作系统和应用环境



```python
import re

def test3():
    """
    \d 匹配数字
    ^ 匹配字符串的开始
    $ 匹配字符串的结束
    """

    input_text = "123456"
    print('输入字符：', input_text)
    pattern = re.compile('^\d\d\d\d\d\d$')  # 匹配6位数字
    search_obj = pattern.search(input_text)
    print(search_obj)
    if search_obj:
        print('匹配6位数字：', search_obj.group())

    pattern = re.compile('^1\d\d\d\d\d$')  # 匹配1开头的6位数字
    search_obj = pattern.search(input_text)
    print(search_obj)
    if search_obj:
        print('匹配1开头的6位数字：', search_obj.group())

    pattern = re.compile('^1\d\d\d\d6$')  # 匹配1开头6结尾的6位数字
    search_obj = pattern.search(input_text)
    print(search_obj)
    if search_obj:
        print('匹配1开头6结尾的6位数字：', search_obj.group())

    input_text = "Cats 10 are smarter than dogs"
    print('输入字符：', input_text)
    pattern = re.compile('^Cats')
    search_obj = pattern.search(input_text)
    print(search_obj)
    if search_obj:
        print('匹配字符串的开始：', search_obj.group())

    pattern = re.compile('dogs$')
    search_obj = pattern.search(input_text)
    print(search_obj)
    if search_obj:
        print('匹配字符串的结束：', search_obj.group())


if __name__ == "__main__":
    test3()

```

## 重复限定符

为了处理这些重复问题，正则表达式中一些重复限定符，把重复部分用合适的限定符替代

|语法|说明|备注
|--|--|--|
|*|重复零次或更多次|>=0|
|+|重复一次或更多次|>=1|
|？|重复零次或一次|=0或=1|
|｛n｝|重复n次|=n次|
|{n,}|重复n次或更多次|>=n次|
|{n,m}|重复n到m次|大于n小于m|
