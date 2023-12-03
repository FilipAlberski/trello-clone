import { OrganizationList } from '@clerk/nextjs';

export default function CreateOrganization() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/oraganization/:id"
      afterCreateOrganizationUrl="/oraganization/:id"
    />
  );
}
