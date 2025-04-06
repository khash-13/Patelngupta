import ServiceDetail from "@/components/Service/ServiceDetail";
import React from "react";

export default function ServiceDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <ServiceDetail slug={slug} />;
}
