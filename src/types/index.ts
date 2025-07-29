import React from 'react';

// Tipo per un "file"
export interface FileNode {
  id: string;
  type: 'file';
  name: string;
  content: React.ReactNode; // Il contenuto può essere qualsiasi elemento React
  children?: undefined; // Un file non ha figli
}

// Tipo per una "cartella"
export interface FolderNode {
  id: string;
  type: 'folder';
  name: string;
  children: FileSystemNode[]; // Una cartella ha un array di file o altre cartelle
  content?: undefined; // Una cartella non ha contenuto diretto
}

// Tipo unione per rappresentare entrambi
export type FileSystemNode = FileNode | FolderNode;