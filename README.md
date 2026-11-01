# vCraft

_Tinh hoa làng nghề, muôn phương lan tỏa_

Nền tảng web "Triển lãm số" cho làng nghề truyền thống. Bài tập lớn môn INT3306 - Phát triển ứng dụng web.

## Công nghệ

- **Client:** React, Vite, React Router
- **Server:** Node.js, Express

## Cấu trúc thư mục

```
vCraft/
├── client/             Giao diện React
│   └── src/
│       ├── api/        Các hàm gọi API bằng fetch
│       └── pages/      Mỗi trang là một component
└── server/             API Express
    └── src/
        └── routes/     Các endpoint /api/...
```

## Chạy dự án

Cần Node.js 22.22 trở lên.

```bash
npm install
npm run dev
```

- Web: http://localhost:5173
- API: http://localhost:4000/api/health

Nếu trang chủ hiện "API đang hoạt động" nghĩa là client đã kết nối được với server.
