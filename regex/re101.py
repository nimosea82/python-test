import re

"""
正则表达式测试
"""


def test1():
    """
    python 正则表达式测试
    """
    pattern = re.compile('dog')
    input_text = "Cats are smarter than dogs"

    print(input_text)
    search_obj = pattern.search(input_text)
    print(search_obj)
    if search_obj:
        print(search_obj.group())  # 匹配到的字符串内容
        print(search_obj.start())  # 匹配到的字符串开始位置
        print(search_obj.end())  # 匹配到的字符串结束位置
        print(search_obj.span())  # 匹配到的字符串开始和结束文字元祖
    return


def test2():
    """
    . 匹配除换行符以外的任意字符
    """
    pattern = re.compile('.')
    input_text = "Cats are smarter than dogs"

    print(input_text)
    search_obj = pattern.findall(input_text)
    print(search_obj)
    if search_obj:
        for y in search_obj:
            print(y)


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


def test4():
    """
    重复限定符
    """

    input_text = "123456"
    print('输入字符：', input_text)
    pattern = re.compile('^\d*$')  # 匹配6位数字
    search_obj = pattern.search(input_text)
    print(search_obj)
    if search_obj:
        print('匹配6位数字：', search_obj.group())

    # 改造
    pattern = re.compile('^\d{6}$')  # 匹配6位数字
    search_obj = pattern.search(input_text)
    print(search_obj)
    if search_obj:
        print('重复匹配6位数字：', search_obj.group())

    input_text = "123456"
    print('输入字符：', input_text)
    pattern = re.compile('^1\d{10,}6$')  # 匹配1开头6结尾的6位数字
    search_obj = pattern.search(input_text)
    print(search_obj)
    if search_obj:
        print('匹配1开头6结尾的6位数字：', search_obj.group())


if __name__ == "__main__":
    test4()
