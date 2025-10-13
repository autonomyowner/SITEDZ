'use client'

import { useState } from 'react'
import { DualRangeSlider } from './ui/DualRangeSlider'

const getBudgetCategory = (budget: number): string => {
  if (budget <= 15000) {
    return 'Site Vitrine'
  }
  if (budget <= 35000) {
    return 'Site E-commerce'
  }
  return 'Startup Level'
}

const getCategoryDescription = (budget: number): string => {
  if (budget <= 15000) {
    return 'Site web professionnel avec design moderne et responsive, parfait pour présenter votre entreprise.'
  }
  if (budget <= 35000) {
    return 'Boutique en ligne complète avec paiement sécurisé, gestion des produits et interface d\'administration.'
  }
  return 'Solution web avancée avec fonctionnalités personnalisées, intégrations complexes et architecture évolutive.'
}

const getCategoryColor = (budget: number): string => {
  if (budget <= 15000) {
    return 'text-blue-600'
  }
  if (budget <= 35000) {
    return 'text-purple-600'
  }
  return 'text-emerald-600'
}

export const BudgetSlider = (): JSX.Element => {
  const [budget, setBudget] = useState<number[]>([0, 50000])

  const handleValueChange = (value: number[]): void => {
    setBudget(value)
  }

  const formatCurrency = (value: number): string => {
    return `${value.toLocaleString('fr-DZ')} DA`
  }

  const maxBudget = budget[1]
  const category = getBudgetCategory(maxBudget)
  const description = getCategoryDescription(maxBudget)
  const categoryColor = getCategoryColor(maxBudget)

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-elegant font-semibold text-neutral-900">
          Estimez votre budget
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          Ajustez le curseur pour voir ce que votre budget peut vous offrir
        </p>
      </div>

      <div className="mb-12">
        <DualRangeSlider
          value={budget}
          onValueChange={handleValueChange}
          min={0}
          max={500000}
          step={1000}
          className="mb-4"
          label={(value) => (
            <span className="text-xs font-semibold text-neutral-700">
              {value !== undefined ? formatCurrency(value) : ''}
            </span>
          )}
        />
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
              Votre Budget
            </p>
            <p className="mt-1 text-3xl font-elegant font-bold text-neutral-900">
              {formatCurrency(maxBudget)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
              Catégorie
            </p>
            <p className={`mt-1 text-xl font-semibold ${categoryColor}`}>
              {category}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-white/80 p-4">
          <p className="text-sm leading-relaxed text-neutral-700">
            {description}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          <div
            className={`rounded-lg p-3 ${
              maxBudget <= 15000
                ? 'bg-blue-50 border-2 border-blue-300'
                : 'bg-neutral-50 border border-neutral-200'
            }`}
          >
            <p className="text-xs font-medium text-neutral-600">Vitrine</p>
            <p className="mt-1 text-xs text-neutral-500">0 - 15K DA</p>
          </div>
          <div
            className={`rounded-lg p-3 ${
              maxBudget > 15000 && maxBudget <= 35000
                ? 'bg-purple-50 border-2 border-purple-300'
                : 'bg-neutral-50 border border-neutral-200'
            }`}
          >
            <p className="text-xs font-medium text-neutral-600">E-commerce</p>
            <p className="mt-1 text-xs text-neutral-500">15K - 35K DA</p>
          </div>
          <div
            className={`rounded-lg p-3 ${
              maxBudget > 35000
                ? 'bg-emerald-50 border-2 border-emerald-300'
                : 'bg-neutral-50 border border-neutral-200'
            }`}
          >
            <p className="text-xs font-medium text-neutral-600">Startup</p>
            <p className="mt-1 text-xs text-neutral-500">35K - 500K DA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

