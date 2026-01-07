'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { useCollection } from '@/firebase/firestore/use-collection';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Container } from '@/components/layout/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import Image from 'next/image';
import Link from 'next/link';

type Submission = {
  id: string;
  formType: 'empresa' | 'profissional';
  name: string;
  email: string;
  submissionDate: string;
  phone?: string;
  service?: string;
  companyName?: string;
  employeeCount?: string;
  companySite?: string;
  challenge?: string;
  goal?: string;
  details?: string;
  howYouFoundUs?: string;
  role?: string;
  department?: string;
  companyTime?: string;
  message?: string; // Legacy from older form versions
};

export default function AdminPage() {
  const router = useRouter();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  const submissionsQuery = useMemoFirebase(
    () => {
        if (!firestore) return null;
        return query(
            collection(firestore, 'contactFormSubmissions'),
            orderBy('submissionDate', 'desc')
        );
    },
    [firestore]
  );

  const {
    data: submissions,
    isLoading: isSubmissionsLoading,
    error,
  } = useCollection<Submission>(submissionsQuery);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const handleLogout = async () => {
    if (auth) {
        await auth.signOut();
        router.push('/login');
    }
  };

  if (isUserLoading || !user) {
    return (
        <div className="flex h-screen items-center justify-center bg-background">
            <div className="flex items-center space-x-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-48" />
            </div>
        </div>
    );
  }

  const renderSubmissionDetails = (submission: Submission) => {
    const isEmpresa = submission.formType === 'empresa';
    return (
        <div className="space-y-3 text-sm max-h-[70vh] overflow-y-auto pr-4">
            <p><strong>ID:</strong> {submission.id}</p>
            <p><strong>Data:</strong> {format(new Date(submission.submissionDate), 'dd/MM/yyyy HH:mm')}</p>
            <p><strong>Tipo:</strong> <Badge variant={isEmpresa ? 'default' : 'secondary'}>{submission.formType}</Badge></p>
            <hr/>
            <p><strong>Nome:</strong> {submission.name}</p>
            <p><strong>Email:</strong> {submission.email}</p>
            {submission.phone && <p><strong>Telefone:</strong> {submission.phone}</p>}
            <hr/>
            {isEmpresa ? (
                <>
                    {submission.companyName && <p><strong>Empresa:</strong> {submission.companyName}</p>}
                    {submission.employeeCount && <p><strong>Nº de Funcionários:</strong> {submission.employeeCount}</p>}
                    {submission.companySite && <p><strong>Site:</strong> {submission.companySite}</p>}
                </>
            ) : (
                <>
                    {submission.companyName && <p><strong>Empresa:</strong> {submission.companyName}</p>}
                    {submission.role && <p><strong>Cargo:</strong> {submission.role}</p>}
                    {submission.department && <p><strong>Departamento:</strong> {submission.department}</p>}
                    {submission.companyTime && <p><strong>Tempo na Empresa:</strong> {submission.companyTime}</p>}
                </>
            )}
             <hr/>
            {submission.service && <p><strong>Serviço de Interesse:</strong> {submission.service}</p>}
            {submission.challenge && <p><strong>Desafio Principal:</strong><br/>{submission.challenge}</p>}
            {submission.goal && <p><strong>Objetivo:</strong><br/>{submission.goal}</p>}
            {submission.details && <p><strong>Detalhes Adicionais:</strong><br/>{submission.details}</p>}
            {submission.message && <p><strong>Mensagem:</strong><br/>{submission.message}</p>}
            {submission.howYouFoundUs && <p><strong>Como nos encontrou:</strong> {submission.howYouFoundUs}</p>}
        </div>
    );
  };


  return (
    <>
        <div className="min-h-screen bg-secondary/30">
            <header className="bg-background shadow-sm">
                <Container className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center -ml-10">
                        <div className="relative h-12 w-32">
                        <Image
                            src="https://ik.imagekit.io/leosmc2zb/PULSOASAP/2.jpg?updatedAt=1766181749842"
                            alt="PulsoASAP Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                        </div>
                    </Link>
                    <Button variant="outline" onClick={handleLogout}>
                    Sair
                    </Button>
                </Container>
            </header>

            <main className="py-8">
                <Container>
                    <Card>
                        <CardHeader>
                            <CardTitle>Respostas do Formulário de Contato</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {isSubmissionsLoading && (
                                <div className="space-y-2">
                                    <Skeleton className="h-10 w-full" />
                                    <Skeleton className="h-10 w-full" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                            )}
                            {error && <p className="text-destructive">Erro ao carregar dados: {error.message}</p>}
                            {!isSubmissionsLoading && submissions && (
                                <div className="overflow-x-auto">
                                    <Table>
                                    <TableHeader>
                                        <TableRow>
                                        <TableHead>Data</TableHead>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Tipo</TableHead>
                                        <TableHead>Mensagem</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {submissions.map((submission) => (
                                        <TableRow key={submission.id} onClick={() => setSelectedSubmission(submission)} className="cursor-pointer">
                                            <TableCell>
                                            {format(
                                                new Date(submission.submissionDate),
                                                'dd/MM/yyyy HH:mm'
                                            )}
                                            </TableCell>
                                            <TableCell>{submission.name}</TableCell>
                                            <TableCell>{submission.email}</TableCell>
                                            <TableCell>
                                            <Badge variant={submission.formType === 'empresa' ? 'default': 'secondary'}>
                                                {submission.formType}
                                            </Badge>
                                            </TableCell>
                                            <TableCell className="max-w-xs truncate">
                                            {submission.challenge || submission.goal || submission.details || submission.message || 'N/A'}
                                            </TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                    </Table>
                                </div>
                            )}
                            {!isSubmissionsLoading && submissions?.length === 0 && (
                                <p className="text-center text-muted-foreground py-8">Nenhuma resposta encontrada.</p>
                            )}
                        </CardContent>
                    </Card>
                </Container>
            </main>
        </div>
        <AlertDialog open={!!selectedSubmission} onOpenChange={(isOpen) => !isOpen && setSelectedSubmission(null)}>
            <AlertDialogContent className="max-w-2xl">
                <AlertDialogHeader>
                    <AlertDialogTitle>Detalhes da Submissão</AlertDialogTitle>
                     {selectedSubmission && renderSubmissionDetails(selectedSubmission)}
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-4">
                    <AlertDialogAction onClick={() => setSelectedSubmission(null)}>Fechar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </>
  );
}
