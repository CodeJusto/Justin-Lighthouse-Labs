def non_duplicated_values(values)
  # Write your code here
  values.each do |x| 
  unless values.count(x) == 1
    puts values.count(x)
    values.delete(x)
  end
end
print values
end


non_duplicated_values([1,2,2,3,3,3,4,4,4,4,5,5,5,6])