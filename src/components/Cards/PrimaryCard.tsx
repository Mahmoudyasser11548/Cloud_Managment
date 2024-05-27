import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbButton, BreadcrumbDivider, BreadcrumbItem, Button, Text } from '@fluentui/react-components';
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { FcFilledFilter } from "react-icons/fc";

interface Breadcrumb {
  label: string;
  route: string;
  isActive: boolean;
}

interface HeaderProps {
  breadCrumbs: Breadcrumb[];
  title: string;
  t: TFunction<"translation", undefined>
}

const Header = ({ breadCrumbs = [], title = "", t }: HeaderProps) => {

  const breadcrumbItems = breadCrumbs.map(({ label, route, isActive }, index, arr) => (
    <BreadcrumbItem key={index}>
      {isActive ? (
        <BreadcrumbButton current>{t(label)}</BreadcrumbButton>
      ) : (
        <BreadcrumbButton href={route}>{t(label)}</BreadcrumbButton>
      )}
      {index !== arr.length - 1 ? <BreadcrumbDivider /> : ""}
    </BreadcrumbItem>
  ));

  return (
    <div style={{ padding: '10px 20px' }}>
      <div className="p-2 border rounded flex items-center justify-between">
        <span className="font-semibold text-3xl">{t(title)}</span>
        <Breadcrumb>
          {breadcrumbItems}
        </Breadcrumb>
      </div>
    </div>
  );
};

interface FilterProps {
  filter: React.ReactNode;
  addButton: React.ReactNode;
  listCount: string;
  title: string;
  t: TFunction<"translation", undefined>
}

const Filter = ({ filter, addButton, listCount = "", t }: FilterProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <div style={{ padding: '10px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text size={600}>
          {listCount}
        </Text>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button onClick={toggleCollapse} icon={<FcFilledFilter />}>
            {t("filter")}
          </Button>
          {addButton}
        </div>
      </div>
      {collapsed && <div>{filter}</div>}
    </div>
  );
};

const Body = ({ body }: { body: React.ReactNode }) => (
  <div style={{ padding: '10px 20px' }}>{body}</div>
);

interface PrimaryCardProps {
  title: string;
  filter: React.ReactNode;
  body: React.ReactNode;
  addButton: React.ReactNode;
  listCount: string;
  breadCrumbs: Breadcrumb[];
}

const PrimaryCard = ({ title, filter, body, addButton, listCount, breadCrumbs }: PrimaryCardProps) => {
  const { t } = useTranslation();

  return (
    <div style={{ width: '100%', border: '1px solid #ccc', borderRadius: 4, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Header breadCrumbs={breadCrumbs} title={title} t={t} />
      {filter && <Filter filter={filter} addButton={addButton} listCount={listCount} title={title} t={t} />}
      <Body body={body} />
    </div>
  );
};

export default PrimaryCard;
export { Header };
