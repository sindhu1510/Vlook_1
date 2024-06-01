
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';
import './index.scss';
import PendingScreen from './pendingScreen';
import HistoryScreen from './historyScreen'

export default function BasicDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Pending">
                  <PendingScreen/>
                </TabPanel>
                <TabPanel header="History">
                   <HistoryScreen/>
                </TabPanel>
                
            </TabView>
        </div>
    )
}
        