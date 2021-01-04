import React from 'react';
export default [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          源代码输入
        </>
      ),
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          词法分析
        </>
      ),
    },
    position: { x: 250, y: 100 },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          语法分析
        </>
      ),
    },
    position: { x: 250, y: 200 }
  },
  {
    id: '4',
    position: { x: 250, y: 300 },
    data: {
      label: (
        <>
          语义分析
        </>
      ),
    },
  },
  {
    id: '5',
    data: {
      label: (
          <>
            代码生成
          </>
      ),
    },
    position: { x: 250, y: 400 },
  },
  {
    id: '6',
    type: 'output',
    data: {
      label: (
        <>
          LLVM中间表示
        </>
      ),
    },
    position: { x: 250, y: 500 },
  },
  {
    id: '7',
    data: {
      label: (
        <>
          错误处理
        </>
      ),
    },
    position: { x: 0, y: 250 },
  },
  {
    id: '8',
    data: {
      label: (
        <>
          符号表
        </>
      ),
    },
    position: { x: 500, y: 250 },
  },
  { id: 'e1-2', source: '1', target: '2', label:'Antlr',animated: true, },
  { id: 'e2-3', source: '2', target: '3',label:'Antlr',animated:true },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    label: 'Visitor',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    animated:true,
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    animated:true,
    label: 'llvmlite',
  },
  {
    id: 'e2-7',
    source: '2',
    target: '7',
    animated:true,
  },
  {
    id: 'e3-7',
    source: '3',
    target: '7',
    animated:true,
  },
  {
    id: 'e4-7',
    source: '4',
    target: '7',
    animated:true,
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    animated:true,
  },
  {
    id: 'e2-8',
    source: '2',
    target: '8',
    animated:true,
  },
  {
    id: 'e3-8',
    source: '3',
    target: '8',
    animated:true,
  },
  {
    id: 'e4-8',
    source: '4',
    target: '8',
    animated:true,
  },
  {
    id: 'e5-8',
    source: '5',
    target: '8',
    animated:true,
  },
];