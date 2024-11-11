import { useState } from "react";
import ServiceTable from "./ServiceTable";
import NewService from "./NewService";
import EditService from "./EditService";
import { useGetServicesQuery, useCreateServiceMutation, useDeleteServiceMutation, useUpdateServiceMutation } from "@/features/api/apiSlice";

export const PERIODS = [15, 30, 60, 90, 120];

const ServiceListContainer = () => {
  const { data, isLoading } = useGetServicesQuery();
  const [createService] = useCreateServiceMutation();
  const [deleteService] = useDeleteServiceMutation();
  const [updateService] = useUpdateServiceMutation();
  const services = data?.services;
  const [editServiceId, setEditServiceId] = useState(null);
  const editService = editServiceId ? services?.find(service => service.id === editServiceId) : null;

  const handleSubmit = (service) => {
    createService(service);
  }

  const handleDelete = (id) => {
    deleteService(id);
  }

  const handleEdit = (id) => {
    setEditServiceId(id);
  }

  const handleSave = (service) => {
    updateService(service);
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
