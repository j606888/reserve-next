import { useState } from "react";
import ServiceTable from "./ServiceTable";
import NewService from "./NewService";
import EditService from "./EditService";
import { useGetServicesQuery } from "@/features/api/apiSlice";

export const PERIODS = [15, 30, 60, 90, 120];

const ServiceListContainer = () => {
  const { data, isLoading } = useGetServicesQuery();
  const services = data?.services;
  const [editServiceId, setEditServiceId] = useState(null);
  const editService = editServiceId ? services?.find(service => service.id === editServiceId) : null;

  const handleSubmit = (service) => {
    setServices([...services, service]);
  }

  const handleDelete = (id) => {
    setServices(services.filter(service => service.id !== id));
  }

  const handleEdit = (id) => {
    setEditServiceId(id);
  }

  const handleSave = (service) => {
    setServices(services.map(s => s.id === service.id ? service : s));
    setEditServiceId(null);
  }

  if (isLoading) return <div>Loading...</div>;

  return <>
    <NewService onSubmit={handleSubmit} />
    <ServiceTable services={services} onDelete={handleDelete} onEdit={handleEdit} />
    {editService && <EditService service={editService} onSave={handleSave} onClose={() => setEditServiceId(null)} />}
  </>
};

export default ServiceListContainer;
