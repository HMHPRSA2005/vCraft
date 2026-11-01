import { useEffect, useState } from "react";
import { getHealth } from "../api/health.js";

export default function HomePage() {
  const [apiStatus, setApiStatus] = useState("Đang kiểm tra kết nối API...");

  useEffect(() => {
    getHealth()
      .then(() => setApiStatus("API đang hoạt động"))
      .catch(() => setApiStatus("Không kết nối được API"));
  }, []);

  return (
    <section>
      <h1>Tinh hoa làng nghề, muôn phương lan tỏa</h1>
      <p>Triển lãm số dành cho làng nghề truyền thống.</p>
      <p className="api-status">{apiStatus}</p>
    </section>
  );
}
