'use client';

import { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    // Example: Change the URL without reloading the page
    window.history.pushState(null, 'New Title', '/dashboard');
    // Or to replace the current history entry:
    // window.history.replaceState(null, 'New Title', '/new-path-without-reload');
  }, []);

  return <p>Invoices Page</p>;
}
