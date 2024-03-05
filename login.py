from fastapi import APIRouter, Depends, HTTPException, status
from fastapi import FastAPI, Form, Request, Response

app=FastAPI()

@app.get("/login")
async def login():
    return {"usr1":["huyang","123456"],"usr2":["zhangsan","123456"],"usr3":["lisi","123456"],"usr4":["wangwu","123456"],"usr5":["zhaoliu","123456"]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("login:app", host="146.56.205.121", port=8080,reload=True)