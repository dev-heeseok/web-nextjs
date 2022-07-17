export default function loginRoute(req, res) {
  if (req.method === "POST") {
    console.log("로그인 실행");
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure")
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
};