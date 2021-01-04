import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import {Flex,Box,Button} from 'rebass'
import { Select,Input,Textarea } from '@rebass/forms'
import { ThemeProvider } from '@emotion/react'
import preset from '@rebass/preset'
import sources from './constants'
import axios from 'axios'

axios.defaults.baseURL = "http://127.0.0.1:5000"

function LiveEditor() {
  const [examples] = useState(sources)
  const [compileRes,setCompileRes] = useState("");
  const [exampleKey,setExampleKey] = useState('sort')
  const [input,setInput] = useState("")
  const [output,setOutput] = useState("")

  function handleCompile() {
    axios.post(`/compile`,{exampleKey:exampleKey}).then(res=>{
        setCompileRes(res.data.compileRes)
    })
  }

  function handleRun(){
    axios.post(`/run`,{input:input}).then(res=>{
        setOutput(res.data.runRes)
    })
  }

  return (
    <>
    <ThemeProvider theme={preset}>
    <Flex width={1}>
    <Box
    p={3}
    width={1/2}
    color='white'>
<Flex alignItems='center' justifyContent='space-between' mb={2}>
  <Select
    id='example'
    fontSize={1}
    name='example'
    value={exampleKey}
    onChange={(e)=>{setExampleKey(e.target.value)}}
    >
    {Object.entries(examples).map(([ key, source ]) => (
      <option
        key={key} value={key} style={{color:'black'}}>
        {key}
      </option>
    ))}
  </Select>
    <Button variant='outline' fontSize={1} onClick={handleCompile}>
        Compile
      </Button>
      </Flex>
      <Editor
        theme='dark'
        height="90vh"
        language="c"
        value={examples[exampleKey]}
      />
  </Box>
  
  <Box
    p={3}
    width={1/2}
    color='white'>
<Flex alignItems='center' justifyContent='space-between' mb={2} fontSize={1}>
    <Flex width={3/4}>
    <Textarea value={input} mr={3} onChange={(e)=>setInput(e.target.value)}></Textarea>
    <Textarea value={output} mr={2} onChange={(e)=>setOutput(e.target.value)}></Textarea>
    </Flex>
    <Button  variant='outline' fontSize={1} onClick={handleRun}>
        Run
      </Button>
      </Flex>
      <Editor
        theme='dark'
        height="90vh"
        language="llvm"
        value={compileRes}
      />
  </Box>
      </Flex>
      </ThemeProvider>
    </>
  );
}

export default LiveEditor