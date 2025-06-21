'use client';

import { Badge } from '@/components/ui/badge';
import { Dialog } from '@/components/ui/dialog';
import { useState } from 'react';

export const DocumentViewer = ({ base64Pdf }: { base64Pdf: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!base64Pdf) return <span>No document</span>;

  return (
    <>
      <Badge
        onClick={() => setIsOpen(true)}
        className="h-10 w-max rounded-md hover:cursor-pointer"
        variant="secondary"
      >
        View Uploaded Document
      </Badge>

      {isOpen && (
        <Dialog open={isOpen}>
          <iframe
            src={`data:application/pdf;base64,${base64Pdf}`}
            className="h-[500px] w-full rounded border"
            title="CAC Document"
          />
        </Dialog>
      )}
    </>
  );
};
