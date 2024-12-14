import React, { useState, useMemo } from 'react'

interface Transaction {
  id: string
  type: 'credit' | 'debit'
  amount: number
  description: string
  date: string
  status: 'completed' | 'pending' | 'failed'
  reference?: string
}

function CreditPage() {
  const [filterType, setFilterType] = useState<'all' | 'credit' | 'debit'>('all')

  // Dummy data
  const creditBalance = 2450.00
  const dummyTransactions: Transaction[] = [
    {
      id: '1',
      type: 'credit',
      amount: 500.00,
      description: 'Credit deposit',
      date: '2024-03-15',
      status: 'completed',
      reference: 'REF001'
    },
    {
      id: '2',
      type: 'debit',
      amount: 150.00,
      description: 'Purchase - Order #1234',
      date: '2024-03-14',
      status: 'completed',
      reference: 'ORD1234'
    },
    {
      id: '3',
      type: 'credit',
      amount: 2000.00,
      description: 'Bank transfer deposit',
      date: '2024-03-10',
      status: 'completed',
      reference: 'REF002'
    },
    {
      id: '4',
      type: 'debit',
      amount: 75.00,
      description: 'Purchase - Order #1235',
      date: '2024-03-08',
      status: 'pending',
      reference: 'ORD1235'
    },
    {
      id: '5',
      type: 'credit',
      amount: 200.00,
      description: 'Mobile money deposit',
      date: '2024-03-05',
      status: 'failed',
      reference: 'REF003'
    }
  ]

  const filteredTransactions = useMemo(() => {
    if (filterType === 'all') return dummyTransactions
    return dummyTransactions.filter(t => t.type === filterType)
  }, [filterType])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className='px-4 w-full max-w-6xl mx-auto pb-10'>
      <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-2xl font-semibold text-black text-center'>My Credit Balance</h1>
      </div>

      {/* Credit Balance Card */}
      <div className='mt-10 rounded-lg bg-gradient-to-r from-black to-black/90 shadow-xl p-8'>
        <div className='flex justify-between items-center'>
          <div>
            <p className='text-sm text-white/80'>Available Credit</p>
            <p className='text-4xl font-bold text-white mt-2'>₵ {creditBalance.toFixed(2)}</p>
          </div>
          <button className='bg-primary text-white px-6 py-3 rounded-lg hover:text-primary hover:bg-blue-50 transition-colors font-medium'>
            + Add Credit
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        <div className='bg-white rounded-lg p-4 shadow-md'>
          <p className='text-gray-600 text-sm'>Total Credits</p>
          <p className='text-green-600 font-bold text-xl mt-1'>
            ₵ {dummyTransactions.filter(t => t.type === 'credit').reduce((acc, t) => acc + t.amount, 0).toFixed(2)}
          </p>
        </div>
        <div className='bg-white rounded-lg p-4 shadow-md'>
          <p className='text-gray-600 text-sm'>Total Debits</p>
          <p className='text-red-600 font-bold text-xl mt-1'>
            ₵ {dummyTransactions.filter(t => t.type === 'debit').reduce((acc, t) => acc + t.amount, 0).toFixed(2)}
          </p>
        </div>
        <div className='bg-white rounded-lg p-4 shadow-md'>
          <p className='text-gray-600 text-sm'>Total Transactions</p>
          <p className='text-blue-600 font-bold text-xl mt-1'>{dummyTransactions.length}</p>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className='mt-10'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4'>
          <h2 className='text-xl text-black font-bold'>Transaction History</h2>
          <div className='flex gap-4 items-center'>
            <select
              className='border rounded-lg px-4 py-2 text-sm bg-white shadow-sm'
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
            >
              <option value="all">All Transactions</option>
              <option value="credit">Credits Only</option>
              <option value="debit">Debits Only</option>
            </select>
          </div>
        </div>

        {filteredTransactions.length > 0 ? (
          <div className='space-y-4'>
            {filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className='bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-lg transition-shadow'
              >
                <div className='flex-1'>
                  <div className='flex items-center gap-2'>
                    <span className={`w-2 h-2 rounded-full ${transaction.type === 'credit' ? 'bg-green-500' : 'bg-red-500'
                      }`}></span>
                    <p className='font-medium text-black'>{transaction.description}</p>
                  </div>
                  <p className='text-sm text-gray-500 mt-1'>Ref: {transaction.reference}</p>
                  <p className='text-sm text-gray-500'>{formatDate(transaction.date)}</p>
                </div>
                <div className='text-right'>
                  <p className={`font-bold text-lg ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                    {transaction.type === 'credit' ? '+' : '-'} ₵ {transaction.amount.toFixed(2)}
                  </p>
                  <span className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                    }`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='mt-5 rounded-lg bg-white shadow-xl p-8 text-center'>
            <p className='text-gray-500 font-medium'>No transactions found</p>
            <p className='text-sm text-gray-400 mt-2'>Your transaction history will appear here</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CreditPage