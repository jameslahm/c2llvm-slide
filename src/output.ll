; ModuleID = ""
target triple = "x86_64-pc-linux-gnu"
target datalayout = "e-m:e-i64:64-f80:128-n8:16:32:64-S128"

declare i32 @"printf"(i8* %".1", ...) 

declare i32 @"gets"(i8* %".1") 

declare i32 @"strlen"(i8* %".1") 

define i32 @"main"() 
{
main.body:
  %"a" = alloca i32
  store i32 1, i32* %"a"
  %".3" = getelementptr inbounds [18 x i8], [18 x i8]* @".string1", i32 0, i32 0
  %".4" = call i32 (i8*, ...) @"printf"(i8* %".3")
  ret i32 0
}

@".string1" = constant [18 x i8] c"Hello, C To LLVM\0a\00"
