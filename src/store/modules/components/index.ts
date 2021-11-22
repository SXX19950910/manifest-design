// tslint:disable
import barcode from 'jsbarcode';
import Vue from 'vue'
// @ts-ignore
import _ from 'lodash';
import { Notification } from 'element-ui'
// @ts-ignore
import { debounce, throttle } from 'throttle-debounce'
// @ts-ignore
import { getStringVars } from '@/utils';
const defaultTemplate = [
  {
    "name": "使用手册",
    "data": [
      {
        "name": "customText",
        "type": "TextUi",
        "classify": "TextMenu",
        "title": "自定义文本",
        "instance": true,
        "tag": "span",
        "updateId": "1636365752813",
        "position": {
          "clientX": 0,
          "clientY": 0
        },
        "variable": {
          "enable": false,
          "textData": [
            {
              "value": "使",
              "key": "",
              "indexes": 0
            },
            {
              "value": "用",
              "key": "",
              "indexes": 1
            },
            {
              "value": "手",
              "key": "",
              "indexes": 2
            },
            {
              "value": "册",
              "key": "",
              "indexes": 3
            }
          ]
        },
        "default": {
          "height": 65,
          "width": 600,
          "x": 0,
          "y": 0
        },
        "props": {
          "text": "使用手册",
          "align": "center",
          "fontFamily": "",
          "fontSize": "30px",
          "lineHeight": "2.5",
          "isBold": false,
          "hasBorder": false
        },
        "id": "kvqhuc2e",
        "rect": {
          "x": 362.5,
          "y": 180.5,
          "width": 600,
          "height": 65,
          "top": 180.5,
          "right": 962.5,
          "bottom": 245.5,
          "left": 362.5
        }
      },
      {
        "name": "customText",
        "type": "TextUi",
        "classify": "TextMenu",
        "title": "自定义文本",
        "instance": true,
        "tag": "span",
        "updateId": "1636365868084",
        "position": {
          "clientX": 26.5,
          "clientY": 107.5
        },
        "variable": {
          "enable": false,
          "textData": [
            {
              "value": "1",
              "key": "",
              "indexes": 0
            },
            {
              "value": ".",
              "key": "",
              "indexes": 1
            },
            {
              "value": "创",
              "key": "",
              "indexes": 2
            },
            {
              "value": "建",
              "key": "",
              "indexes": 3
            },
            {
              "value": "模",
              "key": "",
              "indexes": 4
            },
            {
              "value": "板",
              "key": "",
              "indexes": 5
            },
            {
              "value": "，",
              "key": "",
              "indexes": 6
            },
            {
              "value": "将",
              "key": "",
              "indexes": 7
            },
            {
              "value": "右",
              "key": "",
              "indexes": 8
            },
            {
              "value": "侧",
              "key": "",
              "indexes": 9
            },
            {
              "value": "组",
              "key": "",
              "indexes": 10
            },
            {
              "value": "件",
              "key": "",
              "indexes": 11
            },
            {
              "value": "拖",
              "key": "",
              "indexes": 12
            },
            {
              "value": "入",
              "key": "",
              "indexes": 13
            },
            {
              "value": "页",
              "key": "",
              "indexes": 14
            },
            {
              "value": "面",
              "key": "",
              "indexes": 15
            },
            {
              "value": "中",
              "key": "",
              "indexes": 16
            },
            {
              "value": "间",
              "key": "",
              "indexes": 17
            },
            {
              "value": "画",
              "key": "",
              "indexes": 18
            },
            {
              "value": "板",
              "key": "",
              "indexes": 19
            },
            {
              "value": "，",
              "key": "",
              "indexes": 20
            },
            {
              "value": "即",
              "key": "",
              "indexes": 21
            },
            {
              "value": "可",
              "key": "",
              "indexes": 22
            },
            {
              "value": "创",
              "key": "",
              "indexes": 23
            },
            {
              "value": "建",
              "key": "",
              "indexes": 24
            },
            {
              "value": "打",
              "key": "",
              "indexes": 25
            },
            {
              "value": "印",
              "key": "",
              "indexes": 26
            },
            {
              "value": "元",
              "key": "",
              "indexes": 27
            },
            {
              "value": "素",
              "key": "",
              "indexes": 28
            },
            {
              "value": "。",
              "key": "",
              "indexes": 29
            }
          ]
        },
        "default": {
          "height": 36,
          "width": 509,
          "x": 26.5,
          "y": 107.5
        },
        "props": {
          "text": "1.创建模板，将右侧组件拖入页面中间画板，即可创建打印元素。",
          "align": "left",
          "fontFamily": "",
          "fontSize": "16px",
          "lineHeight": "",
          "isBold": false,
          "hasBorder": false
        },
        "id": "kvqhxahl",
        "rect": {
          "x": 389,
          "y": 288,
          "width": 509,
          "height": 36,
          "top": 288,
          "right": 898,
          "bottom": 324,
          "left": 389
        }
      },
      {
        "name": "customText",
        "type": "TextUi",
        "classify": "TextMenu",
        "title": "自定义文本",
        "instance": true,
        "tag": "span",
        "updateId": "1636365933156",
        "position": {
          "clientX": 26.5,
          "clientY": 148.5
        },
        "variable": {
          "enable": true,
          "textData": [
            {
              "value": "2",
              "key": "",
              "indexes": 0
            },
            {
              "value": ".",
              "key": "",
              "indexes": 1
            },
            {
              "value": "支",
              "key": "",
              "indexes": 2
            },
            {
              "value": "持",
              "key": "",
              "indexes": 3
            },
            {
              "value": "插",
              "key": "",
              "indexes": 4
            },
            {
              "value": "入",
              "key": "",
              "indexes": 5
            },
            {
              "value": "模",
              "key": "",
              "indexes": 6
            },
            {
              "value": "板",
              "key": "",
              "indexes": 7
            },
            {
              "value": "变",
              "key": "",
              "indexes": 8
            },
            {
              "value": "量",
              "key": "",
              "indexes": 9
            },
            {
              "value": "功",
              "key": "",
              "indexes": 10
            },
            {
              "value": "能",
              "key": "",
              "indexes": 11
            },
            {
              "value": "，",
              "key": "",
              "indexes": 12
            },
            {
              "value": "例",
              "key": "",
              "indexes": 13
            },
            {
              "value": "如",
              "key": "",
              "indexes": 14
            },
            {
              "value": "：",
              "key": "",
              "indexes": 15
            },
            {
              "value": "${var}",
              "key": "var",
              "indexes": [
                16,
                17,
                18,
                19,
                20,
                21
              ]
            }
          ]
        },
        "default": {
          "height": 52,
          "width": 466,
          "x": 26.5,
          "y": 148.5
        },
        "props": {
          "text": "2.支持插入模板变量功能，例如：${var}",
          "align": "left",
          "fontFamily": "",
          "fontSize": "16px",
          "lineHeight": "",
          "isBold": false,
          "hasBorder": false
        },
        "id": "kvqhzn31",
        "rect": {
          "x": 389,
          "y": 329,
          "width": 466,
          "height": 52,
          "top": 329,
          "right": 855,
          "bottom": 381,
          "left": 389
        }
      },
      {
        "name": "customText",
        "type": "TextUi",
        "classify": "TextMenu",
        "title": "自定义文本",
        "instance": true,
        "tag": "span",
        "updateId": "1636366540366",
        "position": {
          "clientX": 26.5,
          "clientY": 193.5
        },
        "variable": {
          "enable": false,
          "textData": [
            {
              "value": "3",
              "key": "",
              "indexes": 0
            },
            {
              "value": ".",
              "key": "",
              "indexes": 1
            },
            {
              "value": "设",
              "key": "",
              "indexes": 2
            },
            {
              "value": "计",
              "key": "",
              "indexes": 3
            },
            {
              "value": "好",
              "key": "",
              "indexes": 4
            },
            {
              "value": "模",
              "key": "",
              "indexes": 5
            },
            {
              "value": "板",
              "key": "",
              "indexes": 6
            },
            {
              "value": "后",
              "key": "",
              "indexes": 7
            },
            {
              "value": "，",
              "key": "",
              "indexes": 8
            },
            {
              "value": "可",
              "key": "",
              "indexes": 9
            },
            {
              "value": "以",
              "key": "",
              "indexes": 10
            },
            {
              "value": "保",
              "key": "",
              "indexes": 11
            },
            {
              "value": "存",
              "key": "",
              "indexes": 12
            },
            {
              "value": "为",
              "key": "",
              "indexes": 13
            },
            {
              "value": "图",
              "key": "",
              "indexes": 14
            },
            {
              "value": "片",
              "key": "",
              "indexes": 15
            },
            {
              "value": "进",
              "key": "",
              "indexes": 16
            },
            {
              "value": "行",
              "key": "",
              "indexes": 17
            },
            {
              "value": "打",
              "key": "",
              "indexes": 18
            },
            {
              "value": "印",
              "key": "",
              "indexes": 19
            },
            {
              "value": "，",
              "key": "",
              "indexes": 20
            },
            {
              "value": "也",
              "key": "",
              "indexes": 21
            },
            {
              "value": "可",
              "key": "",
              "indexes": 22
            },
            {
              "value": "以",
              "key": "",
              "indexes": 23
            },
            {
              "value": "点",
              "key": "",
              "indexes": 24
            },
            {
              "value": "击",
              "key": "",
              "indexes": 25
            },
            {
              "value": "上",
              "key": "",
              "indexes": 26
            },
            {
              "value": "方",
              "key": "",
              "indexes": 27
            },
            {
              "value": "”",
              "key": "",
              "indexes": 28
            },
            {
              "value": "生",
              "key": "",
              "indexes": 29
            },
            {
              "value": "成",
              "key": "",
              "indexes": 30
            },
            {
              "value": "v",
              "key": "",
              "indexes": 31
            },
            {
              "value": "u",
              "key": "",
              "indexes": 32
            },
            {
              "value": "e",
              "key": "",
              "indexes": 33
            },
            {
              "value": "模",
              "key": "",
              "indexes": 34
            },
            {
              "value": "板",
              "key": "",
              "indexes": 35
            },
            {
              "value": "组",
              "key": "",
              "indexes": 36
            },
            {
              "value": "件",
              "key": "",
              "indexes": 37
            },
            {
              "value": "，",
              "key": "",
              "indexes": 38
            },
            {
              "value": "按",
              "key": "",
              "indexes": 39
            },
            {
              "value": "钮",
              "key": "",
              "indexes": 40
            },
            {
              "value": "，",
              "key": "",
              "indexes": 41
            },
            {
              "value": "将",
              "key": "",
              "indexes": 42
            },
            {
              "value": "模",
              "key": "",
              "indexes": 43
            },
            {
              "value": "板",
              "key": "",
              "indexes": 44
            },
            {
              "value": "下",
              "key": "",
              "indexes": 45
            },
            {
              "value": "载",
              "key": "",
              "indexes": 46
            },
            {
              "value": "至",
              "key": "",
              "indexes": 47
            },
            {
              "value": "本",
              "key": "",
              "indexes": 48
            },
            {
              "value": "地",
              "key": "",
              "indexes": 49
            },
            {
              "value": "，",
              "key": "",
              "indexes": 50
            },
            {
              "value": "后",
              "key": "",
              "indexes": 51
            },
            {
              "value": "续",
              "key": "",
              "indexes": 52
            },
            {
              "value": "可",
              "key": "",
              "indexes": 53
            },
            {
              "value": "以",
              "key": "",
              "indexes": 54
            },
            {
              "value": "通",
              "key": "",
              "indexes": 55
            },
            {
              "value": "过",
              "key": "",
              "indexes": 56
            },
            {
              "value": "组",
              "key": "",
              "indexes": 57
            },
            {
              "value": "件",
              "key": "",
              "indexes": 58
            },
            {
              "value": "的",
              "key": "",
              "indexes": 59
            },
            {
              "value": "形",
              "key": "",
              "indexes": 60
            },
            {
              "value": "式",
              "key": "",
              "indexes": 61
            },
            {
              "value": "使",
              "key": "",
              "indexes": 62
            },
            {
              "value": "用",
              "key": "",
              "indexes": 63
            },
            {
              "value": "该",
              "key": "",
              "indexes": 64
            },
            {
              "value": "打",
              "key": "",
              "indexes": 65
            },
            {
              "value": "印",
              "key": "",
              "indexes": 66
            },
            {
              "value": "模",
              "key": "",
              "indexes": 67
            },
            {
              "value": "板",
              "key": "",
              "indexes": 68
            },
            {
              "value": "。",
              "key": "",
              "indexes": 69
            }
          ]
        },
        "default": {
          "height": 76,
          "width": 542,
          "x": 26.5,
          "y": 193.5
        },
        "props": {
          "text": "3.设计好模板后，可以保存为图片进行打印，也可以点击上方”生成vue模板组件，按钮，将模板下载至本地，后续可以通过组件的形式使用该打印模板。",
          "align": "left",
          "fontFamily": "",
          "fontSize": "16px",
          "lineHeight": "",
          "isBold": false,
          "hasBorder": false
        },
        "id": "kvqi18pd",
        "rect": {
          "x": 389,
          "y": 374,
          "width": 542,
          "height": 76,
          "top": 374,
          "right": 931,
          "bottom": 450,
          "left": 389
        }
      },
      {
        "name": "customText",
        "type": "TextUi",
        "classify": "TextMenu",
        "title": "自定义文本",
        "instance": true,
        "tag": "span",
        "updateId": "1636366553367",
        "position": {
          "clientX": 26.5,
          "clientY": 284.5
        },
        "variable": {
          "enable": false,
          "textData": [
            {
              "value": "4",
              "key": "",
              "indexes": 0
            },
            {
              "value": ".",
              "key": "",
              "indexes": 1
            },
            {
              "value": "组",
              "key": "",
              "indexes": 2
            },
            {
              "value": "件",
              "key": "",
              "indexes": 3
            },
            {
              "value": "形",
              "key": "",
              "indexes": 4
            },
            {
              "value": "式",
              "key": "",
              "indexes": 5
            },
            {
              "value": "调",
              "key": "",
              "indexes": 6
            },
            {
              "value": "用",
              "key": "",
              "indexes": 7
            },
            {
              "value": "打",
              "key": "",
              "indexes": 8
            },
            {
              "value": "印",
              "key": "",
              "indexes": 9
            },
            {
              "value": "方",
              "key": "",
              "indexes": 10
            },
            {
              "value": "式",
              "key": "",
              "indexes": 11
            },
            {
              "value": "：",
              "key": "",
              "indexes": 12
            },
            {
              "value": "t",
              "key": "",
              "indexes": 13
            },
            {
              "value": "h",
              "key": "",
              "indexes": 14
            },
            {
              "value": "i",
              "key": "",
              "indexes": 15
            },
            {
              "value": "s",
              "key": "",
              "indexes": 16
            },
            {
              "value": ".",
              "key": "",
              "indexes": 17
            },
            {
              "value": "$",
              "key": "",
              "indexes": 18
            },
            {
              "value": "r",
              "key": "",
              "indexes": 19
            },
            {
              "value": "e",
              "key": "",
              "indexes": 20
            },
            {
              "value": "f",
              "key": "",
              "indexes": 21
            },
            {
              "value": "s",
              "key": "",
              "indexes": 22
            },
            {
              "value": ".",
              "key": "",
              "indexes": 23
            },
            {
              "value": "t",
              "key": "",
              "indexes": 24
            },
            {
              "value": "e",
              "key": "",
              "indexes": 25
            },
            {
              "value": "m",
              "key": "",
              "indexes": 26
            },
            {
              "value": "p",
              "key": "",
              "indexes": 27
            },
            {
              "value": "l",
              "key": "",
              "indexes": 28
            },
            {
              "value": "a",
              "key": "",
              "indexes": 29
            },
            {
              "value": "t",
              "key": "",
              "indexes": 30
            },
            {
              "value": "e",
              "key": "",
              "indexes": 31
            },
            {
              "value": ".",
              "key": "",
              "indexes": 32
            },
            {
              "value": "p",
              "key": "",
              "indexes": 33
            },
            {
              "value": "r",
              "key": "",
              "indexes": 34
            },
            {
              "value": "i",
              "key": "",
              "indexes": 35
            },
            {
              "value": "n",
              "key": "",
              "indexes": 36
            },
            {
              "value": "t",
              "key": "",
              "indexes": 37
            },
            {
              "value": "(",
              "key": "",
              "indexes": 38
            },
            {
              "value": "{",
              "key": "",
              "indexes": 39
            },
            {
              "value": "\n",
              "key": "",
              "indexes": 40
            },
            {
              "value": " ",
              "key": "",
              "indexes": 41
            },
            {
              "value": " ",
              "key": "",
              "indexes": 42
            },
            {
              "value": " ",
              "key": "",
              "indexes": 43
            },
            {
              "value": " ",
              "key": "",
              "indexes": 44
            },
            {
              "value": " ",
              "key": "",
              "indexes": 45
            },
            {
              "value": " ",
              "key": "",
              "indexes": 46
            },
            {
              "value": " ",
              "key": "",
              "indexes": 47
            },
            {
              "value": " ",
              "key": "",
              "indexes": 48
            },
            {
              "value": "v",
              "key": "",
              "indexes": 49
            },
            {
              "value": "a",
              "key": "",
              "indexes": 50
            },
            {
              "value": "r",
              "key": "",
              "indexes": 51
            },
            {
              "value": "i",
              "key": "",
              "indexes": 52
            },
            {
              "value": "a",
              "key": "",
              "indexes": 53
            },
            {
              "value": "b",
              "key": "",
              "indexes": 54
            },
            {
              "value": "l",
              "key": "",
              "indexes": 55
            },
            {
              "value": "e",
              "key": "",
              "indexes": 56
            },
            {
              "value": "s",
              "key": "",
              "indexes": 57
            },
            {
              "value": ":",
              "key": "",
              "indexes": 58
            },
            {
              "value": " ",
              "key": "",
              "indexes": 59
            },
            {
              "value": "{",
              "key": "",
              "indexes": 60
            },
            {
              "value": "\n",
              "key": "",
              "indexes": 61
            },
            {
              "value": " ",
              "key": "",
              "indexes": 62
            },
            {
              "value": " ",
              "key": "",
              "indexes": 63
            },
            {
              "value": " ",
              "key": "",
              "indexes": 64
            },
            {
              "value": " ",
              "key": "",
              "indexes": 65
            },
            {
              "value": " ",
              "key": "",
              "indexes": 66
            },
            {
              "value": " ",
              "key": "",
              "indexes": 67
            },
            {
              "value": " ",
              "key": "",
              "indexes": 68
            },
            {
              "value": " ",
              "key": "",
              "indexes": 69
            },
            {
              "value": " ",
              "key": "",
              "indexes": 70
            },
            {
              "value": " ",
              "key": "",
              "indexes": 71
            },
            {
              "value": "r",
              "key": "",
              "indexes": 72
            },
            {
              "value": "e",
              "key": "",
              "indexes": 73
            },
            {
              "value": "c",
              "key": "",
              "indexes": 74
            },
            {
              "value": "e",
              "key": "",
              "indexes": 75
            },
            {
              "value": "i",
              "key": "",
              "indexes": 76
            },
            {
              "value": "v",
              "key": "",
              "indexes": 77
            },
            {
              "value": "e",
              "key": "",
              "indexes": 78
            },
            {
              "value": "r",
              "key": "",
              "indexes": 79
            },
            {
              "value": "A",
              "key": "",
              "indexes": 80
            },
            {
              "value": "d",
              "key": "",
              "indexes": 81
            },
            {
              "value": "d",
              "key": "",
              "indexes": 82
            },
            {
              "value": "r",
              "key": "",
              "indexes": 83
            },
            {
              "value": "e",
              "key": "",
              "indexes": 84
            },
            {
              "value": "s",
              "key": "",
              "indexes": 85
            },
            {
              "value": "s",
              "key": "",
              "indexes": 86
            },
            {
              "value": ":",
              "key": "",
              "indexes": 87
            },
            {
              "value": " ",
              "key": "",
              "indexes": 88
            },
            {
              "value": "'",
              "key": "",
              "indexes": 89
            },
            {
              "value": "v",
              "key": "",
              "indexes": 90
            },
            {
              "value": "a",
              "key": "",
              "indexes": 91
            },
            {
              "value": "l",
              "key": "",
              "indexes": 92
            },
            {
              "value": "u",
              "key": "",
              "indexes": 93
            },
            {
              "value": "e",
              "key": "",
              "indexes": 94
            },
            {
              "value": "1",
              "key": "",
              "indexes": 95
            },
            {
              "value": "'",
              "key": "",
              "indexes": 96
            },
            {
              "value": ",",
              "key": "",
              "indexes": 97
            },
            {
              "value": "\n",
              "key": "",
              "indexes": 98
            },
            {
              "value": " ",
              "key": "",
              "indexes": 99
            },
            {
              "value": " ",
              "key": "",
              "indexes": 100
            },
            {
              "value": " ",
              "key": "",
              "indexes": 101
            },
            {
              "value": " ",
              "key": "",
              "indexes": 102
            },
            {
              "value": " ",
              "key": "",
              "indexes": 103
            },
            {
              "value": " ",
              "key": "",
              "indexes": 104
            },
            {
              "value": " ",
              "key": "",
              "indexes": 105
            },
            {
              "value": " ",
              "key": "",
              "indexes": 106
            },
            {
              "value": " ",
              "key": "",
              "indexes": 107
            },
            {
              "value": " ",
              "key": "",
              "indexes": 108
            },
            {
              "value": "b",
              "key": "",
              "indexes": 109
            },
            {
              "value": "a",
              "key": "",
              "indexes": 110
            },
            {
              "value": "r",
              "key": "",
              "indexes": 111
            },
            {
              "value": "c",
              "key": "",
              "indexes": 112
            },
            {
              "value": "o",
              "key": "",
              "indexes": 113
            },
            {
              "value": "d",
              "key": "",
              "indexes": 114
            },
            {
              "value": "e",
              "key": "",
              "indexes": 115
            },
            {
              "value": "V",
              "key": "",
              "indexes": 116
            },
            {
              "value": "a",
              "key": "",
              "indexes": 117
            },
            {
              "value": "l",
              "key": "",
              "indexes": 118
            },
            {
              "value": "u",
              "key": "",
              "indexes": 119
            },
            {
              "value": "e",
              "key": "",
              "indexes": 120
            },
            {
              "value": ":",
              "key": "",
              "indexes": 121
            },
            {
              "value": " ",
              "key": "",
              "indexes": 122
            },
            {
              "value": "'",
              "key": "",
              "indexes": 123
            },
            {
              "value": "v",
              "key": "",
              "indexes": 124
            },
            {
              "value": "a",
              "key": "",
              "indexes": 125
            },
            {
              "value": "l",
              "key": "",
              "indexes": 126
            },
            {
              "value": "u",
              "key": "",
              "indexes": 127
            },
            {
              "value": "e",
              "key": "",
              "indexes": 128
            },
            {
              "value": "2",
              "key": "",
              "indexes": 129
            },
            {
              "value": "'",
              "key": "",
              "indexes": 130
            },
            {
              "value": ",",
              "key": "",
              "indexes": 131
            },
            {
              "value": "\n",
              "key": "",
              "indexes": 132
            },
            {
              "value": " ",
              "key": "",
              "indexes": 133
            },
            {
              "value": " ",
              "key": "",
              "indexes": 134
            },
            {
              "value": " ",
              "key": "",
              "indexes": 135
            },
            {
              "value": " ",
              "key": "",
              "indexes": 136
            },
            {
              "value": " ",
              "key": "",
              "indexes": 137
            },
            {
              "value": " ",
              "key": "",
              "indexes": 138
            },
            {
              "value": " ",
              "key": "",
              "indexes": 139
            },
            {
              "value": " ",
              "key": "",
              "indexes": 140
            },
            {
              "value": " ",
              "key": "",
              "indexes": 141
            },
            {
              "value": " ",
              "key": "",
              "indexes": 142
            },
            {
              "value": "q",
              "key": "",
              "indexes": 143
            },
            {
              "value": "r",
              "key": "",
              "indexes": 144
            },
            {
              "value": "c",
              "key": "",
              "indexes": 145
            },
            {
              "value": "o",
              "key": "",
              "indexes": 146
            },
            {
              "value": "d",
              "key": "",
              "indexes": 147
            },
            {
              "value": "e",
              "key": "",
              "indexes": 148
            },
            {
              "value": "V",
              "key": "",
              "indexes": 149
            },
            {
              "value": "a",
              "key": "",
              "indexes": 150
            },
            {
              "value": "l",
              "key": "",
              "indexes": 151
            },
            {
              "value": "u",
              "key": "",
              "indexes": 152
            },
            {
              "value": "e",
              "key": "",
              "indexes": 153
            },
            {
              "value": ":",
              "key": "",
              "indexes": 154
            },
            {
              "value": " ",
              "key": "",
              "indexes": 155
            },
            {
              "value": "'",
              "key": "",
              "indexes": 156
            },
            {
              "value": "v",
              "key": "",
              "indexes": 157
            },
            {
              "value": "a",
              "key": "",
              "indexes": 158
            },
            {
              "value": "l",
              "key": "",
              "indexes": 159
            },
            {
              "value": "u",
              "key": "",
              "indexes": 160
            },
            {
              "value": "e",
              "key": "",
              "indexes": 161
            },
            {
              "value": "3",
              "key": "",
              "indexes": 162
            },
            {
              "value": "'",
              "key": "",
              "indexes": 163
            },
            {
              "value": "\n",
              "key": "",
              "indexes": 164
            },
            {
              "value": " ",
              "key": "",
              "indexes": 165
            },
            {
              "value": " ",
              "key": "",
              "indexes": 166
            },
            {
              "value": " ",
              "key": "",
              "indexes": 167
            },
            {
              "value": " ",
              "key": "",
              "indexes": 168
            },
            {
              "value": " ",
              "key": "",
              "indexes": 169
            },
            {
              "value": " ",
              "key": "",
              "indexes": 170
            },
            {
              "value": " ",
              "key": "",
              "indexes": 171
            },
            {
              "value": " ",
              "key": "",
              "indexes": 172
            },
            {
              "value": "}",
              "key": "",
              "indexes": 173
            },
            {
              "value": "\n",
              "key": "",
              "indexes": 174
            },
            {
              "value": " ",
              "key": "",
              "indexes": 175
            },
            {
              "value": " ",
              "key": "",
              "indexes": 176
            },
            {
              "value": " ",
              "key": "",
              "indexes": 177
            },
            {
              "value": " ",
              "key": "",
              "indexes": 178
            },
            {
              "value": " ",
              "key": "",
              "indexes": 179
            },
            {
              "value": " ",
              "key": "",
              "indexes": 180
            },
            {
              "value": "}",
              "key": "",
              "indexes": 181
            },
            {
              "value": ")",
              "key": "",
              "indexes": 182
            },
            {
              "value": ",",
              "key": "",
              "indexes": 183
            },
            {
              "value": " ",
              "key": "",
              "indexes": 184
            },
            {
              "value": "调",
              "key": "",
              "indexes": 185
            },
            {
              "value": "用",
              "key": "",
              "indexes": 186
            },
            {
              "value": "t",
              "key": "",
              "indexes": 187
            },
            {
              "value": "e",
              "key": "",
              "indexes": 188
            },
            {
              "value": "m",
              "key": "",
              "indexes": 189
            },
            {
              "value": "p",
              "key": "",
              "indexes": 190
            },
            {
              "value": "l",
              "key": "",
              "indexes": 191
            },
            {
              "value": "a",
              "key": "",
              "indexes": 192
            },
            {
              "value": "t",
              "key": "",
              "indexes": 193
            },
            {
              "value": "e",
              "key": "",
              "indexes": 194
            },
            {
              "value": "的",
              "key": "",
              "indexes": 195
            },
            {
              "value": "p",
              "key": "",
              "indexes": 196
            },
            {
              "value": "r",
              "key": "",
              "indexes": 197
            },
            {
              "value": "i",
              "key": "",
              "indexes": 198
            },
            {
              "value": "n",
              "key": "",
              "indexes": 199
            },
            {
              "value": "t",
              "key": "",
              "indexes": 200
            },
            {
              "value": "方",
              "key": "",
              "indexes": 201
            },
            {
              "value": "法",
              "key": "",
              "indexes": 202
            },
            {
              "value": "，",
              "key": "",
              "indexes": 203
            },
            {
              "value": "然",
              "key": "",
              "indexes": 204
            },
            {
              "value": "后",
              "key": "",
              "indexes": 205
            },
            {
              "value": "传",
              "key": "",
              "indexes": 206
            },
            {
              "value": "入",
              "key": "",
              "indexes": 207
            },
            {
              "value": "v",
              "key": "",
              "indexes": 208
            },
            {
              "value": "a",
              "key": "",
              "indexes": 209
            },
            {
              "value": "r",
              "key": "",
              "indexes": 210
            },
            {
              "value": "i",
              "key": "",
              "indexes": 211
            },
            {
              "value": "a",
              "key": "",
              "indexes": 212
            },
            {
              "value": "b",
              "key": "",
              "indexes": 213
            },
            {
              "value": "l",
              "key": "",
              "indexes": 214
            },
            {
              "value": "e",
              "key": "",
              "indexes": 215
            },
            {
              "value": "s",
              "key": "",
              "indexes": 216
            },
            {
              "value": "变",
              "key": "",
              "indexes": 217
            },
            {
              "value": "量",
              "key": "",
              "indexes": 218
            },
            {
              "value": "即",
              "key": "",
              "indexes": 219
            },
            {
              "value": "可",
              "key": "",
              "indexes": 220
            },
            {
              "value": "，",
              "key": "",
              "indexes": 221
            },
            {
              "value": "注",
              "key": "",
              "indexes": 222
            },
            {
              "value": "意",
              "key": "",
              "indexes": 223
            },
            {
              "value": "v",
              "key": "",
              "indexes": 224
            },
            {
              "value": "a",
              "key": "",
              "indexes": 225
            },
            {
              "value": "r",
              "key": "",
              "indexes": 226
            },
            {
              "value": "i",
              "key": "",
              "indexes": 227
            },
            {
              "value": "a",
              "key": "",
              "indexes": 228
            },
            {
              "value": "b",
              "key": "",
              "indexes": 229
            },
            {
              "value": "l",
              "key": "",
              "indexes": 230
            },
            {
              "value": "e",
              "key": "",
              "indexes": 231
            },
            {
              "value": "s",
              "key": "",
              "indexes": 232
            },
            {
              "value": "对",
              "key": "",
              "indexes": 233
            },
            {
              "value": "象",
              "key": "",
              "indexes": 234
            },
            {
              "value": "的",
              "key": "",
              "indexes": 235
            },
            {
              "value": "k",
              "key": "",
              "indexes": 236
            },
            {
              "value": "e",
              "key": "",
              "indexes": 237
            },
            {
              "value": "y",
              "key": "",
              "indexes": 238
            },
            {
              "value": "要",
              "key": "",
              "indexes": 239
            },
            {
              "value": "和",
              "key": "",
              "indexes": 240
            },
            {
              "value": "模",
              "key": "",
              "indexes": 241
            },
            {
              "value": "板",
              "key": "",
              "indexes": 242
            },
            {
              "value": "中",
              "key": "",
              "indexes": 243
            },
            {
              "value": "的",
              "key": "",
              "indexes": 244
            },
            {
              "value": "变",
              "key": "",
              "indexes": 245
            },
            {
              "value": "量",
              "key": "",
              "indexes": 246
            },
            {
              "value": "名",
              "key": "",
              "indexes": 247
            },
            {
              "value": "称",
              "key": "",
              "indexes": 248
            },
            {
              "value": "一",
              "key": "",
              "indexes": 249
            },
            {
              "value": "一",
              "key": "",
              "indexes": 250
            },
            {
              "value": "对",
              "key": "",
              "indexes": 251
            },
            {
              "value": "应",
              "key": "",
              "indexes": 252
            },
            {
              "value": "。",
              "key": "",
              "indexes": 253
            }
          ]
        },
        "default": {
          "height": 96,
          "width": 554,
          "x": 26.5,
          "y": 284.5
        },
        "props": {
          "text": "4.组件形式调用打印方式：this.$refs.template.print({\n        variables: {\n          receiverAddress: 'value1',\n          barcodeValue: 'value2',\n          qrcodeValue: 'value3'\n        }\n      }), 调用template的print方法，然后传入variables变量即可，注意variables对象的key要和模板中的变量名称一一对应。",
          "align": "left",
          "fontFamily": "",
          "fontSize": "16px",
          "lineHeight": "",
          "isBold": false,
          "hasBorder": false
        },
        "id": "kvqi9lnu",
        "rect": {
          "x": 389,
          "y": 465,
          "width": 554,
          "height": 96,
          "top": 465,
          "right": 943,
          "bottom": 561,
          "left": 389
        }
      },
      {
        "name": "barCode",
        "type": "BarcodeUi",
        "classify": "BarcodeMenu",
        "instance": true,
        "title": "条形码",
        "tag": "img",
        "updateId": "1636366626449",
        "position": {
          "clientX": 252,
          "clientY": 501
        },
        "default": {
          "height": 83,
          "width": 234,
          "x": 252,
          "y": 501
        },
        "variable": {
          "enable": true,
          "textData": [
            {
              "value": "1",
              "key": "",
              "indexes": 0
            },
            {
              "value": "2",
              "key": "",
              "indexes": 1
            },
            {
              "value": "3",
              "key": "",
              "indexes": 2
            },
            {
              "value": "4",
              "key": "",
              "indexes": 3
            },
            {
              "value": "5",
              "key": "",
              "indexes": 4
            },
            {
              "value": "6",
              "key": "",
              "indexes": 5
            },
            {
              "value": "7",
              "key": "",
              "indexes": 6
            },
            {
              "value": "8",
              "key": "",
              "indexes": 7
            },
            {
              "value": "9",
              "key": "",
              "indexes": 8
            },
            {
              "value": "${barcode}",
              "key": "barcode",
              "indexes": [
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18
              ]
            }
          ]
        },
        "props": {
          "format": "CODE128",
          "lineWidth": 2,
          "bodyHeight": 40,
          "fontSize": 14,
          "displayValue": "1",
          "data": "123456789${barcode}"
        },
        "id": "kvqiek3l",
        "rect": {
          "x": 614.5,
          "y": 681.5,
          "width": 234,
          "height": 83,
          "top": 681.5,
          "right": 848.5,
          "bottom": 764.5,
          "left": 614.5
        }
      },
      {
        "name": "qrCode",
        "type": "QrCodeUi",
        "classify": "QrCodeMenu",
        "title": "二维码",
        "updateId": "1636366602368",
        "tag": "img",
        "instance": true,
        "position": {
          "clientX": 497,
          "clientY": 492
        },
        "variable": {
          "enable": false,
          "textData": []
        },
        "default": {
          "height": 108,
          "width": 103,
          "x": 497,
          "y": 492
        },
        "props": {
          "data": "https://shixiaoxi.cn/",
          "options": {
            "margin": 4,
            "width": "",
            "scale": 4,
            "errorCorrectionLevel": "H"
          }
        },
        "id": "kvqif0ub",
        "rect": {
          "x": 859.5,
          "y": 672.5,
          "width": 103,
          "height": 108,
          "top": 672.5,
          "right": 962.5,
          "bottom": 780.5,
          "left": 859.5
        }
      },
      {
        "name": "xLine",
        "type": "XLineUi",
        "classify": "LineMenu",
        "instance": true,
        "title": "横线",
        "tag": "div",
        "updateId": "1636366656874",
        "position": {
          "clientX": 1,
          "clientY": 418.5
        },
        "default": {
          "height": 1,
          "width": 599,
          "x": 1,
          "y": 418.5
        },
        "props": {
          "width": 80,
          "height": 1,
          "lineType": "solid"
        },
        "id": "kvqigdat",
        "rect": {
          "x": 363.5,
          "y": 599,
          "width": 599,
          "height": 1,
          "top": 599,
          "right": 962.5,
          "bottom": 600,
          "left": 363.5
        }
      },
      {
        "name": "xLine",
        "type": "XLineUi",
        "classify": "LineMenu",
        "instance": true,
        "title": "横线",
        "tag": "div",
        "updateId": "1636366672152",
        "position": {
          "clientX": 245.5,
          "clientY": 460.5
        },
        "default": {
          "height": 1,
          "width": 354,
          "x": 245.5,
          "y": 460.5
        },
        "props": {
          "width": 80,
          "height": 1,
          "lineType": "solid"
        },
        "id": "kvqigmhq",
        "rect": {
          "x": 608,
          "y": 641,
          "width": 354,
          "height": 1,
          "top": 641,
          "right": 962,
          "bottom": 642,
          "left": 608
        }
      },
      {
        "name": "yLine",
        "type": "YLineUi",
        "classify": "LineMenu",
        "title": "竖线",
        "updateId": "1636366684894",
        "tag": "div",
        "instance": true,
        "position": {
          "clientX": 244.5,
          "clientY": 460.5
        },
        "default": {
          "height": 139,
          "width": 1,
          "x": 244.5,
          "y": 460.5
        },
        "props": {
          "height": 60,
          "width": 1
        },
        "id": "kvqigubr",
        "rect": {
          "x": 607,
          "y": 641,
          "width": 1,
          "height": 139,
          "top": 641,
          "right": 608,
          "bottom": 780,
          "left": 607
        }
      }
    ],
    "options": {
      "width": 600,
      "height": 600
    }
  }
]


const localTemplate: any = localStorage.getItem('templateList') || JSON.stringify(defaultTemplate)
const generateId = () => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}
const remove = (list: [], prop: string, value: any) => {
  list.map((item: any, index: number) => {
    if (item[prop] === value) {
      list.splice(index, 1)
    }
  })
}
const components = {
  namespaced: true,
  state: {
    activeComponent: '',
    selected: {
      instance: [],
      ids: []
    },
    line: {
      top: '',
      left: ''
    },
    componentMap: {
      senderAddress: {
        name: 'senderAddress',
        type: 'TextUi',
        classify: 'TextMenu',
        title: '寄件人地址',
        updateId: '',
        instance: false,
        tag: 'span',
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        variable: {
          enable: false,
          textData: []
        },
        props: {
          text: '寄件人地址',
          align: 'left',
          fontFamily: '',
          lineHeight: '',
          fontSize: '',
          isBold: false,
          hasBorder: false,
        }
      },
      receiverAddress: {
        type: 'TextUi',
        name: 'receiverAddress',
        classify: 'TextMenu',
        title: '收件人地址',
        instance: false,
        tag: 'span',
        updateId: '',
        position: {
          clientX: '',
          clientY: '',
        },
        variable: {
          enable: false,
          textData: []
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          text: '收件人地址',
          align: 'left',
          fontFamily: '',
          lineHeight: '',
          fontSize: '',
          isBold: false,
          hasBorder: false,
        },
      },
      barcode: {
        name: 'barCode',
        type: 'BarcodeUi',
        classify: 'BarcodeMenu',
        instance: false,
        title: '条形码',
        tag: 'img',
        updateId: '',
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        variable: {
          enable: false,
          textData: []
        },
        props: {
          format: 'CODE128',
          lineWidth: 2,
          bodyHeight: 40,
          fontSize: 14,
          displayValue: '1',
          data: '123456789',
        },
      },
      xLine: {
        name: 'xLine',
        type: 'XLineUi',
        classify: 'LineMenu',
        instance: false,
        title: '横线',
        tag: 'div',
        updateId: '',
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: 80,
          height: 1,
          x: '',
          y: '',
        },
        props: {
          width: 80,
          height: 1,
          lineType: 'solid'
        },
      },
      yLine: {
        name: 'yLine',
        type: 'YLineUi',
        classify: 'LineMenu',
        title: '竖线',
        updateId: '',
        tag: 'div',
        instance: false,
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: 60,
          x: '',
          y: '',
        },
        props: {
          height: 60,
          width: 1,
          lineType: 'solid'
        },
      },
      rectangle: {
        name: 'rectangle',
        type: 'RectangleUi',
        classify: 'RectangleMenu',
        title: '矩形',
        tag: 'div',
        instance: false,
        updateId: '',
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          borderWidth: 1,
          lineType: 'solid'
        },
      },
      qrCode: {
        name: 'qrCode',
        type: 'QrCodeUi',
        classify: 'QrCodeMenu',
        title: '二维码',
        updateId: '',
        tag: 'img',
        instance: false,
        position: {
          clientX: '',
          clientY: '',
        },
        variable: {
          enable: false,
          textData: []
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          data: 'https://shixiaoxi.cn/',
          options: {
            margin: 4,
            width: '',
            scale: 4,
            errorCorrectionLevel: 'H'
          }
        },
      },
      customText: {
        name: 'customText',
        type: 'TextUi',
        classify: 'TextMenu',
        title: '自定义文本',
        instance: false,
        tag: 'span',
        updateId: '',
        position: {
          clientX: '',
          clientY: '',
        },
        variable: {
          enable: false,
          textData: []
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          text: '自定义文本',
          align: 'left',
          fontFamily: '',
          fontSize: '',
          lineHeight: '',
          isBold: false,
          hasBorder: false,
        },
      },
    },
    componentList: [
      {
        title: '地址信息',
        list: [
          {
            title: '收件人地址',
            icon: 'iconfont iconziti1',
            id: 'receiverAddress',
            component: {
              type: 'TextUi',
            },
          },
          {
            title: '发件人地址',
            id: 'senderAddress',
            icon: 'iconfont iconziti1',
            component: {
              type: 'TextUi',
            },
          },
        ],
      },
      {
        title: '商品标签信息',
        list: [
        ],
      },
      {
        title: '构图元素',
        list: [
          {
            title: '自定义文本',
            id: 'customText',
            icon: 'iconfont iconziti1',
            component: {
              type: 'TextUi',
            },
          },
          {
            title: '条形码',
            id: 'barcode',
            icon: 'iconfont icontiaoxingma',
            component: {
              type: 'BarcodeUi',
            },
          },
          {
            title: '二维码',
            id: 'qrCode',
            icon: 'iconfont iconqrcode',
            component: {
              type: 'QrCodeUi',
            },
          },
          {
            title: '横线',
            id: 'xLine',
            icon: 'iconfont iconline',
            component: {
              type: 'XLineUi',
            },
          },
          {
            title: '竖线',
            id: 'yLine',
            icon: 'iconfont icontubiaozhizuo-',
            component: {
              type: 'YLineUi',
            },
          },
          {
            title: '矩形',
            id: 'rectangle',
            icon: 'iconfont iconjuxing',
            component: {
              type: 'YLineUi',
            },
          },
        ],
      },
    ],
    storeList: [],
    templateList: JSON.parse(localTemplate),
    page: {
      width: 500,
      height: 500
    },
    board: {
      x: '',
      y: '',
      minTop: '',
      maxTop: '',
      minLeft: '',
      maxLeft: ''
    },
    storeLoading: true,
    valve: 0
  },
  actions: {
    setComponentVariable({ commit }: any) {
      // const active = state.storeList.find((item: any) => item.id === state.activeComponent.id)
      commit('SET_COMPONENT_VARIABLE')
    },
    updateValve({ commit }: any, payload: any) {
      commit('UPDATE_VALVE', payload)
    },
    setPageSize({ commit }: any, payload: any) {
      commit('SET_PAGE_SIZE', payload);
    },
    setLine({ commit }: any, payload = { left: 0, top: 0 }) {
      commit('SET_LINE', payload)
    },
    updateStoreList({ commit }: any, payload: any) {
      commit('UPDATE_STORE_LIST', payload);
    },
    removeActiveComponent({ commit }: any) {
      commit('REMOVE_ACTIVE_COMPONENT')
    },
    addComponent({ commit, state }: any, payload: any) {
      const id = generateId();
      const entity = state.componentMap[payload.componentId];
      if (!entity) {
        throw new Error(`${payload.componentId} 未找到该组件`);
      }
      const component = JSON.parse(JSON.stringify(entity));
      component.id = id;
      const getComponent = Object.assign(component, payload.props);
      commit('ADD_COMPONENT', getComponent);
    },
    setLayoutData({ commit }: any) {
      const $board: any = document.querySelector('.drag-canvas-warp')
      const { x, y } = $board.getBoundingClientRect();
      const minLeft = x
      const maxLeft = x + 500
      const minTop = y
      const maxTop = y + 500
      commit('SET_LAYOUT_DATA', { minLeft, maxLeft, minTop, maxTop, x, y })
    },
    setActive({ commit }: any, id: string) {
      commit('SET_ACTIVE', id || '');
    },
    saveTemplate({ commit, state }: any, payload: any) {
      const list: any = localStorage.getItem('templateList') || JSON.stringify(defaultTemplate)
      const template = {
        name: payload.name,
        data: _.cloneDeep(state.storeList),
        options: {
          width: state.page.width,
          height: state.page.height
        }
      };
      const newList = JSON.parse(list)
      newList.push(template)
      localStorage.setItem('templateList', JSON.stringify(newList))
      commit('SAVE_TEMPLATE', template);
    },
    batchSelection({ state, commit }: any, payload: any) {
      commit('SET_SELECTION', payload)
    },
    updateBarcode({ state }: any) {
      const current = state.storeList.find((item: any) => item.id === state.activeComponent.id || '') || {};
      const { format, lineWidth, bodyHeight, fontSize } = current.props;
      try {
        barcode(`.${current.id}`, current.props.data, {
          format,
          width: lineWidth,
          height: bodyHeight,
          textMargin: 10,
          fontSize,
          displayValue: false,
        });
      } catch (e) {
        Notification({
          type: 'warning',
          title: '更新失败，参数不匹配',
          message: e,
          duration: 1500,
        });
      }
    },
    updateComponent({ commit, state }: any, payload: any) {
      const current = state.storeList.find((item: any) => item.id === payload.id);
      const newCurrent = _.cloneDeep(current);
      newCurrent.updateId = new Date().getTime().toString();
      const component = Object.assign(newCurrent, payload.update);
      commit('UPDATE_COMPONENT', component);
    },
    clearStoreList({ commit, state }: any, payload: any) {
      commit('CLEAR_STORE_LIST');
    },
    clearSelection({ commit }: any) {
      commit('CLEAR_SELECTION')
    },
    hideStoreLoading({ commit }: any) {
      commit('HIDE_STORE_LOADING')
    }
  },
  mutations: {
    SET_COMPONENT_VARIABLE(state: any) {
      const active = state.storeList.find((item: any) => item.id === state.activeComponent.id)
      if (active) {
        const value = getStringVars(active.props.text || active.props.data)
        console.log(value, '变量值')
        active.variable.textData = value
        active.variable.enable = value.some((item: any) => item.key)
      }
    },
    UPDATE_VALVE(state: any, payload: any) {
      if (typeof payload !== 'undefined') {
        state.valve = payload
      } else if (state.valve < 10) {
        state.valve = state.valve + 1
      }
    },
    SET_LINE(state: any, payload: any) {
      const { top = 0, left = 0 } = payload
      state.line.top = top
      state.line.left = left
    },
    SET_LAYOUT_DATA(state: any, payload: any) {
      const { minTop, maxTop, minLeft, maxLeft } = payload
      state.board.maxLeft = maxLeft
      state.board.maxTop = maxTop
      state.board.minLeft = minLeft
      state.board.minTop = minTop
    },
    SET_SELECTION(state: any, payload: any) {
      state.selected = payload.reduce((total: any, current: any) => {
        total.ids.push(current.id)
        total.instance.push(current)
        return total
      }, { instance: [], ids: []  })
    },
    CLEAR_SELECTION(state: any) {
      state.selected.ids = []
      state.selected.instance = []
    },
    SET_PAGE_SIZE(state: any, size: any) {
      state.page.width = size[0]
      state.page.height = size[1]
    },
    SET_ACTIVE(state: any, id: string) {
      state.activeComponent = state.storeList.find((item: any) => item.id === id) || '';
    },
    SAVE_TEMPLATE(state: any, template: object) {
      state.templateList.push(template);
    },
    HIDE_STORE_LOADING(state: any) {
      state.storeLoading = false
    },
    UPDATE_STORE_LIST(state: any, template: any) {
      state.storeLoading = true
      state.storeList = template.map((item: any) => {
        return _.cloneDeep(item);
      })
      Vue.nextTick(() => {
        setTimeout(() => {
          state.storeLoading = false
        }, 500)
      })
    },
    CLEAR_STORE_LIST(state: any) {
      state.storeList = [];
      const $board: any = document.querySelector('.drag-canvas-warp.board-canvas');
      const $list = $board && $board.querySelectorAll('.item');
      if ($list && $list.length) $list.forEach((item: any) => {
        $board.removeChild(item);
      });
    },
    UPDATE_COMPONENT(state: any, component: any) {
      state.storeList = state.storeList.map((item: any, index: number) => {
        let newItem = {...item};
        if (item.id === component.id) {
          newItem = component;
        }
        return newItem;
      });
    },
    ADD_COMPONENT(state: any, payload: any) {
      state.storeList.push(payload);
    },
    REMOVE_ACTIVE_COMPONENT(state: any) {
      const id = state.activeComponent.id
      if (id) {
        remove(state.storeList, 'id', id)
      } else {
        state.selected.instance.map((item: any) => {
          remove(state.storeList, 'id', item.id)
        })
      }
    }
  },
};

export default components;
