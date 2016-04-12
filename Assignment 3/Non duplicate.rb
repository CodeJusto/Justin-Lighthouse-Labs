def non_duplicated_values(values)
    values.select do |x|
        values.count(x) < 2
    end
end

