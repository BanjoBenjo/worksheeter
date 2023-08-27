import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { ITaskSection } from '@/app/page';

function groupItemsIntoLists({ items, groupSize }: { items: ITaskSection[], groupSize: number }) {
  const groupedLists = [];

  for (let i = 0; i < items.length; i += groupSize) {
    groupedLists.push(items.slice(i, i + groupSize));
  }

  return groupedLists;
}

const PDFPage = ({ tasks, results }: { tasks: ITaskSection[], results: boolean }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      flexWrap: 'wrap', // Wrap content to new columns if needed
      backgroundColor: '#ffffff'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1

    }
  });

  const groupedTasks = groupItemsIntoLists({ items: tasks, groupSize: 2 })

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 20 }}>Rechenaufgaben</Text>

        {groupedTasks.map((taskGroup, index) => (
          <View key={index} style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

            {taskGroup.map((taskSection, index) => (
              <View style={{ flexGrow: 1 }} key={index}>
                <Text style={{ fontSize: 15, paddingLeft: 10, paddingTop: 12, paddingBottom: 5 }}>{taskSection.title}</Text>
                {taskSection.items.map((task, index) => (
                  <Text style={{ fontSize: 12, paddingLeft: 10, paddingVertical: 5 }} key={index}>{`${task.number1} ${task.operator} ${task.number2} = ${results ? task.result : ""}`}</Text>
                ))}
              </View>
            ))}

          </View>
        ))}

      </View>
    </Page>
  )
}

function PDFDocument({ tasks }: { tasks: ITaskSection[] }) {

  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <PDFViewer className="w-full" style={{ height: '100%' }}>
      <Document>
        <PDFPage tasks={tasks} results={true} />
        <PDFPage tasks={tasks} results={false} />
      </Document>
    </PDFViewer>
  );
}

export default PDFDocument;
