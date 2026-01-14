import { Routes, Route, Link } from "react-router";
import { AppLayout } from "./components/layout/AppLayout";
import { SidebarNav } from "./components/layout/SidebarNav";
import { SidebarItem } from "./components/layout/SidebarItem";
import { UserBox } from "./components/ui/UserBox";
import { Button } from "./components/ui/Button";
import { TextIcon } from "./components/ui/TextIcon";
import { WorkflowsPage } from "./features/workflows/WorkflowsPage";
import { WorkflowFormModal } from "./features/workflows/WorkflowFormModal";
import { DeleteConfirmModal } from "./features/workflows/DeleteConfirmModal";
import { DatabaseIcon, StatsIcon, SettingsIcon } from "./icons/icons";
import { USERNAME } from "./lib/constants";

export default function App() {
  return (
    <AppLayout>
      <AppLayout.Sidebar>
        <UserBox username={USERNAME} />
        <Link to="/workflows/create">
          <Button fullWidth>
            <TextIcon value="+" /> New
          </Button>
        </Link>
        <SidebarNav>
          <SidebarItem icon={DatabaseIcon} label="Data Name" />
          <SidebarItem icon={StatsIcon} label="Monitoring" />
          <SidebarItem icon={SettingsIcon} label="Settings" />
        </SidebarNav>
      </AppLayout.Sidebar>
      <AppLayout.Main>
        <Routes>
          <Route path="/" element={<WorkflowsPage />}>
            <Route
              path="workflows/create"
              element={<WorkflowFormModal mode="create" />}
            />
            <Route
              path="workflows/:id/edit"
              element={<WorkflowFormModal mode="edit" />}
            />
            <Route
              path="workflows/:id/delete"
              element={<DeleteConfirmModal />}
            />
          </Route>
        </Routes>
      </AppLayout.Main>
    </AppLayout>
  );
}
