import { useState } from "react";
import ServiceTable from "./ServiceTable";
import NewService from "./NewService";
import EditService from "./EditService";

const MOCK_SERVICES = [
  { id: 1, name: '半身調理', price: 500, period: 30 },
  { id: 2, name: '全身調理', price: 1000, period: 60 },
  { id: 3, name: '輕鬆調理', price: 300, period: 15 },
  { id: 4, name: '足底按摩', price: 500, period: 30 },
  { id: 5, name: '全身去角質', price: 1350, period: 60 },
]

const ServiceListContainer = () => {
  const [services, setServices] = useState(MOCK_SERVICES);
  const [editServiceId, setEditServiceId] = useState(null);
  const editService = services.find(service => service.id === editServiceId);

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

  return <>
    <NewService onSubmit={handleSubmit} />
    <ServiceTable services={services} onDelete={handleDelete} onEdit={handleEdit} />
    {editService && <EditService service={editService} onSave={handleSave} onClose={() => setEditServiceId(null)} />}
  </>
};

export default ServiceListContainer;
