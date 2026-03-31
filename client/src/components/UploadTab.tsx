import React, { useState } from 'react';
import * as XLSX from 'xlsx';

interface PreviewData {
  headers: string[];
  rows: (string | number | boolean | null)[][];
  sheetName: string;
}

const UploadTab = () => {
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsLoading(true);

    // Validate file type
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls') && !file.name.endsWith('.csv')) {
      setError('Please upload a valid Excel (.xlsx, .xls) or CSV file');
      setIsLoading(false);
      return;
    }

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        
        // Get first sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        
        // Parse data
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as (string | number | boolean | null)[][];
        
        if (jsonData.length === 0) {
          setError('The Excel file is empty');
          setIsLoading(false);
          return;
        }

        const headers = (jsonData[0] || []) as string[];
        const rows = jsonData.slice(1);

        setPreviewData({
          headers,
          rows,
          sheetName,
        });
      } catch (err) {
        setError('Failed to parse Excel file: ' + (err instanceof Error ? err.message : 'Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };

    reader.onerror = () => {
      setError('Failed to read file');
      setIsLoading(false);
    };

    reader.readAsBinaryString(file);
  };

  const handleUploadToDatabase = async () => {
    if (!previewData) return;

    setIsLoading(true);
    try {
      // TODO: Replace with actual tRPC call to your server
      // Example: await trpc.upload.mutation.mutate({ data: previewData });
      alert(`Successfully uploaded ${previewData.rows.length} rows to database`);
      setPreviewData(null);
      setFileName(null);
    } catch (err) {
      setError('Failed to upload to database: ' + (err instanceof Error ? err.message : 'Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <h2 className="title is-4">Excel File Upload</h2>
          
          <div className="file has-name is-fullwidth">
            <label className="file-label">
              <input 
                className="file-input" 
                type="file" 
                accept=".xlsx,.xls,.csv"
                onChange={handleFileUpload}
                disabled={isLoading}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">Choose a file...</span>
              </span>
              <span className="file-name">
                {fileName || 'No file selected'}
              </span>
            </label>
          </div>

          {error && (
            <div className="notification is-danger is-light mt-4">
              <button className="delete"></button>
              {error}
            </div>
          )}

          {previewData && (
            <div className="mt-6">
              <h3 className="title is-5">Preview - {previewData.sheetName}</h3>
              <p className="mb-3">
                <strong>Rows to upload:</strong> {previewData.rows.length}
              </p>

              <div className="table-container">
                <table className="table is-striped is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      {previewData.headers.map((header, idx) => (
                        <th key={idx}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {previewData.rows.slice(0, 10).map((row, rowIdx) => (
                      <tr key={rowIdx}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx}>{String(cell ?? '')}</td>
                        ))}
                      </tr>
                    ))}
                    {previewData.rows.length > 10 && (
                      <tr>
                        <td colSpan={previewData.headers.length} className="has-text-centered has-text-grey-light">
                          ... and {previewData.rows.length - 10} more rows
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="buttons mt-4">
                <button
                  className={`button is-primary ${isLoading ? 'is-loading' : ''}`}
                  onClick={handleUploadToDatabase}
                  disabled={isLoading}
                >
                  Upload to Database
                </button>
                <button
                  className="button is-light"
                  onClick={() => setPreviewData(null)}
                  disabled={isLoading}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { UploadTab };
