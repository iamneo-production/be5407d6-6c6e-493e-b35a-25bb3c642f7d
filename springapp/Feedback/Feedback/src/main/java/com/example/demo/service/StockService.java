package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.database.StockRepository;
import com.example.demo.model.Stock;

@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;

    public List<Stock> getAllStock() {
        return stockRepository.findAll();
    }

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }

    public Stock updateStock(Long id, Stock updatedStock) {
        Stock existingStock = stockRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Stock not found"));

        existingStock.setName(updatedStock.getName());
        existingStock.setPrice(updatedStock.getPrice());
        existingStock.setQuantity(updatedStock.getQuantity());
        existingStock.setDate(updatedStock.getDate());

        return stockRepository.save(existingStock);
    }

}
